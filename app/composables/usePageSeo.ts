interface SeoPage {
  title?: string
  description?: string
  seo?: { title?: string, description?: string }
  image?: string
}

export function usePageSeo(page: Ref<SeoPage | null | undefined>) {
  const title = () => page.value?.seo?.title || page.value?.title
  const description = () => page.value?.seo?.description || page.value?.description

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description
  })

  if (page.value?.image) {
    useSeoMeta({ ogImage: () => page.value?.image })
  } else {
    defineOgImage('Default')
  }
}
