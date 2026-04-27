<script setup lang="ts">
const { t } = useI18n()

// Cloudflare Web Analytics (cookieless, privacy-friendly).
// Configured with `trigger: 'manual'` in nuxt.config.ts so the script
// only loads after the visitor explicitly accepts.
const cloudflareAnalytics = useScriptCloudflareWebAnalytics()

// Cookie consent state stored in localStorage.
// We keep the banner even though Cloudflare Analytics is cookieless,
// to be transparent about loading the third-party beacon.
const CONSENT_KEY = 'cookie-consent'

interface ConsentState {
  analytics: boolean
  timestamp: number
}

const showBanner = ref(false)
const analyticsConsent = ref(false)

onMounted(() => {
  const storedConsent = localStorage.getItem(CONSENT_KEY)

  if (storedConsent) {
    const consent: ConsentState = JSON.parse(storedConsent)
    analyticsConsent.value = consent.analytics

    if (consent.analytics) {
      cloudflareAnalytics.load()
    }
  } else {
    showBanner.value = true
  }
})

function saveConsent(analytics: boolean) {
  const consent: ConsentState = {
    analytics,
    timestamp: Date.now()
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

function acceptAll() {
  analyticsConsent.value = true
  saveConsent(true)
  cloudflareAnalytics.load()
  showBanner.value = false
}

function declineAll() {
  analyticsConsent.value = false
  saveConsent(false)
  showBanner.value = false
}
</script>

<template>
  <ClientOnly>
    <!-- Cookie Consent Banner -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-full opacity-0"
      >
        <div
          v-if="showBanner"
          class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div class="mx-auto w-full sm:max-w-lg">
            <div class="rounded-xl border border-default bg-default/95 backdrop-blur-sm shadow-xl p-4 md:p-6">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="shrink-0 p-2 pb-0 rounded-lg bg-primary/10">
                    <UIcon name="i-lucide-cookie" class="w-5 h-5 text-primary" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-highlighted">
                      {{ t('cookies.title') }}
                    </h3>
                    <p class="mt-1 text-sm text-muted">
                      {{ t('cookies.description') }}
                    </p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  <UButton
                    color="primary"
                    size="sm"
                    class="justify-center"
                    icon="i-lucide-heart"
                    @click="acceptAll"
                  >
                    {{ t('cookies.accept') }}
                  </UButton>
                  <UButton
                    color="neutral"
                    variant="outline"
                    size="sm"
                    class="justify-center"
                    icon="i-lucide-heart-crack"
                    @click="declineAll"
                  >
                    {{ t('cookies.decline') }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
