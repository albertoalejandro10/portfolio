<script setup lang="ts">
const { t } = useI18n()
const { gtag, initialize } = useGtag()

// Cookie consent state stored in localStorage
const CONSENT_KEY = 'cookie-consent'

interface ConsentState {
  analytics: boolean
  timestamp: number
}

const showBanner = ref(false)

// Consent preferences
const analyticsConsent = ref(false)

// Initialize component on mount
onMounted(() => {
  const storedConsent = localStorage.getItem(CONSENT_KEY)

  if (storedConsent) {
    // User has already given consent - restore their preferences
    const consent: ConsentState = JSON.parse(storedConsent)
    analyticsConsent.value = consent.analytics

    // Re-apply consent settings if they accepted analytics
    if (consent.analytics) {
      applyConsent(consent.analytics)
    }
  }
  else {
    // Show banner if no consent has been given
    showBanner.value = true
  }
})

// Apply consent settings to Google Tag
function applyConsent(analytics: boolean) {
  // Initialize gtag if consent is given
  if (analytics) {
    initialize()
  }

  // Update consent state
  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  })
}

// Save consent to localStorage
function saveConsent(analytics: boolean) {
  const consent: ConsentState = {
    analytics,
    timestamp: Date.now()
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

// Accept analytics cookies
function acceptAll() {
  analyticsConsent.value = true

  saveConsent(true)
  applyConsent(true)

  showBanner.value = false
}

// Decline analytics cookies
function declineAll() {
  analyticsConsent.value = false

  saveConsent(false)
  applyConsent(false)

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
          <div class="mx-auto w-full lg:max-w-lg">
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
                    @click="acceptAll"
                    icon="i-lucide-heart"
                  >
                    {{ t('cookies.accept') }}
                  </UButton>
                  <UButton
                    color="neutral"
                    variant="outline"
                    size="sm"
                    class="justify-center"
                    @click="declineAll"
                    icon="i-lucide-heart-crack"
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
