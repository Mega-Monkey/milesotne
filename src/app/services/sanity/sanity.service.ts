import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleDto, TestimonialDto } from '../../classes';
import * as blocksToHtml from '@sanity/block-content-to-html';
import sanity from '@sanity/client';

@Injectable()
export class SanityService {
	environment;
	sanity;
	constructor() {
		this.sanity = sanity({
			projectId: environment.sanity.projectId,
			dataset: environment.sanity.dataset,
			useCdn: environment.sanity.useCdn,
		});
	}

	/**
	 * READ ME
	 * A get request: query = '*[_id == "someUUID"]{ specific, fields }[0]'
	 * where * ... [0] is get the first item matching these conditions
	 *
	 * To get an image url, replace the name of the field (eg image) in your {} with "image": image.asset -> url
	 * To get a field which is of type array, use fieldname[]
	 * To get specific fields from an array, use fieldname[] { your, field, names }
	 * To get the result of an array of references, use fieldname[] ->
	 * To get specific fields of the end result of an array of references, use fieldname[] ->  { your, field, names }
	 * To specific image size, once you have your result, map it, replacing the image urls with `${image}?w=123&h=456`.
	 *    You can specify width (w) or height (h) or both. The specified sizes are cached
	 *    Specifying neither returns the image at the size you uploaded it
	 *    Here is some more hot goss: https://www.sanity.io/docs/presenting-images
	 *
	 */

	async getPageBySlug(type: 'homepage' | 'pagePricing', slug: string) {
		console.log(await this.sanity.fetch(`*[_type == "${type}" && slug.current == "${slug}"][0]`));
		return await this.sanity.fetch(`*[_type == "${type}" && slug.current == "${slug}"][0]`);
	}

	async getClients(ref: string) {
		const query = `*[_id == "${ref}"]{ title, buttonTitle, clients[]{"icon": icon.asset -> url}}[0]`;
		const result = await this.sanity.fetch(query);
		result.clients = result.clients.map(x => {
			return {
				logo: `${x.icon}?w=100&h=100`,
			};
		});
		return result;
	}

	async getHeroBannerHomepage(ref: string, schema: object) {
		const parsedSchema = Object.keys(schema).toString();
		const query = `*[_id == "${ref}"]{ ${parsedSchema} }[0]`;
		return await this.sanity.fetch(query);
	}

	async getHeroTextWithImage(ref: string) {
		const query = `*[_id == "${ref}"]{ title, slides[] -> { title, content, localAsset, backgroundColor, "image": image.asset -> url } }[0]`;
		const result = await this.sanity.fetch(query);
		return result;
	}

	async getHeroBannerPricing(ref: string) {
		const query = `*[_id == "${ref}"]{ title, subtitle, linkDestination, linkTitle, "image": image.asset -> url }[0]`;
		return await this.sanity.fetch(query);
	}

	async getFaqs(ref: string) {
		const query = `*[_id == "${ref}"]{ title, linkDestination, linkTitle, faqs[] { question, answer } }[0]`;
		return await this.sanity.fetch(query);
	}

	async getUsps(ref: string) {
		const query = `*[_id == "${ref}"]{ title, usps[] {text, "icon": icon.asset -> url} }[0]`;
		const result = await this.sanity.fetch(query);
		result.usps = result.usps.map(x => {
			return {
				icon: `${x.icon}?w=100&h=100`,
				text: x.text,
			};
		});
		return result;
	}

	async getFooter(slug: string) {
		const query = `
      *[slug.current == "${slug}"] {
        columns[] -> {
         title,
         contents[] {
          ..., 
          "logo": asset -> url,
          "linkIcon": linkIcon.asset -> url
         }
        }
      } [0]
    `;
		const result = await this.sanity.fetch(query);
		result.columns = result.columns.map(x => {
			return {
				title: x.title,
				contents: x.contents.map(y => {
					switch (y._type) {
						case 'logo':
							y.logo += `?w=200&h=50`;
							return y;
						case 'itemWithIcon':
							y.linkIcon += `?w=50&h=50`;
							return y;
						case 'item':
							return y;
					}
				}),
			};
		});
		return result;
	}

	async getDocumentById(id: string, type: string, schema: object, imageFields?: string[]) {
		const parsedSchema = Object.keys(schema).toString();
		let imageQuery = '';
		if (imageFields) {
			for (const field of imageFields) {
				imageQuery += `"${field}": ${field}.asset -> url`;
			}
		}
		const query = imageFields ? `*[_id == "${id}" && _type == "${type}"]{${parsedSchema}, ${imageQuery}}[0]` : `*[_id == "${id}" && _type == "${type}"]{${parsedSchema}}[0]`;
		// we parse the schema so that we only ever fetch what we need
		return await this.sanity.fetch(query);
	}

	async getSteps(id: string) {
		const query = `
      *[_id == "${id}"] {
        title,
        subtitle,
        steps[] {
          text,
          "icon": icon.asset -> url
        }
      }[0]
    `;
		return await this.sanity.fetch(query);
	}

	async getBlogPosts(): Promise<Array<ArticleDto>> {
		const articles = await this.sanity.fetch(`*[_type == "post"]{"mainImage": mainImage.asset -> url, "mobileImage": mobileImage.asset -> url, ...}`);
		for (const article of articles) {
			article.mobileImage ? (article.mobileImage = `${article.mobileImage}?w=700&h=400`) : (article.mobileImage = `${article.mainImage}?w=700&h=400`);
			article.mainImage = `${article.mainImage}?w=1920&h=1080`;
		}
		return articles;
	}

	async getProductFeatureList(id: string) {
		const query = `
    *[_id == "${id}"] {
      title,
      subtitle,
      columns[] -> {
        title,
        lists[] -> {
          title,
          contents
        }
      }
    }[0]`;
		return await this.sanity.fetch(query);
	}

	async getBlogList(id: string) {
		const query = `
    *[_id == "${id}"] {
      title,
      articles[] -> {
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset -> url,
        "mobileImage": mobileImage.asset -> url,
        categories[] -> {
          name
        }
      }
    }[0]`;
		const result = await this.sanity.fetch(query);
		for (let article of result.articles) {
			if (!article.categories) {
				continue;
			}
			article.categories = article.categories.map(x => x.name);
		}
		return result;
	}

	async getTestimonials(id: string) {
		const parsedSchema = Object.keys(new TestimonialDto());
		const query = `
      *[_id == "${id}"] {
        title,
        testimonials[] {
          ${parsedSchema},
          "portrait": portrait.asset -> url
        }
      }[0]
    `;
		return await this.sanity.fetch(query);
	}

	async getArticle(slug: string) {
		return await this.sanity.fetch(`
			*[_type == "post" && slug.current == "${slug}"]
			{
				body[] {..., "asset": asset ->},
				"mainImageUrl": mainImage.asset -> url,
				"mobileImageUrl": mobileImage.asset -> url,
				...,
			}
			[0]`);
	}

	async getIndustry(slug: string) {
		return await this.sanity.fetch(`
			*[_type == "industry" && userType == "${slug}"]
			{
				body[] {..., "asset": asset ->},
				...,
			}
			[0]`);
	}

	async processRichText(body: any[]) {
		// see docs: https://github.com/sanity-io/block-content-to-html
		const h = blocksToHtml.h;
		const serializers = {
			types: {
				code: props => h('pre', { className: `elContainer language-${props.node.language}` }, h('code', props.node.code)),
			},
		};
		const el = blocksToHtml({
			blocks: body,
			serializers,
		});
		return el;
	}
}
