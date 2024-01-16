<template>
  <div class="footer_area">
    <div class="container px-0">
      <div class="row">
        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">
              <img
                src="../assets/contact/footerLogo.png"
                alt=""
                class="footerLogo"
              />
              <span class="ms-2">kytab</span>
            </div>

            <small
              >{{ $t('footer.text') }}</small
            >
            <div>
              <img
                src="../assets/contact/footerAppstore.png"
                alt=""
                class="mt-3"
              />
              <img
                src="../assets/contact/footerPlaymarket.png"
                alt=""
                class="mt-3 ms-2"
              />
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">{{ $t('footer.blog') }}</div>
            <ul class="list-unstyled">
              <NuxtLink to="/products">
                <li>{{ $t('footer.project') }}</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>{{ $t('footer.authors') }}</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>{{ $t('footer.copyright') }}</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">{{ $t('footer.recipes') }}</div>
            <ul class="list-unstyled">
              <NuxtLink>
                <li>{{ $t('footer.contact') }}</li>
              </NuxtLink>
              <NuxtLink>
                <li>{{ $t('footer.offer') }}</li>
              </NuxtLink>
              <NuxtLink>
                <li>{{ $t('footer.privacy') }}</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">{{ $t('footer.contacts') }}</div>
            <p class="contactData">
              <img src="@/assets/contact/footerTelifon.png" alt="" />
              <a class="text-white ms-2" href="tel:+998901237590"
                >+998 90 1237590</a
              >
            </p>

            <p class="contactData">
              <img src="@/assets/contact/email.png" alt="" />
              <a class="text-white ms-2" href="mailto: salom@kytab.uz"
                >salom@kytab.uz</a
              >
            </p>
            <p class="contactData">
              <img src="../assets/contact/lacatsi.png" alt="" class="me-1" />
              {{ $t('footer.address') }}
            </p>
          </div>
        </div>
      </div>
      <!-- ------------------------------ -->
      <hr />

      <div class="row justify-content-between">
        <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="tiny-footer">
            <p>
              {{ $t('footer.rights') }}
            </p>
          </div>
        </div>
        <div
          class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-end"
        >
          <div class="tiny-footer">{{ $t('footer.developer') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer_area {
  // position: relative;
  // z-index: 1;
  color: #fff;
  background-color: #012c50;
}

.footer-widget {
  padding-top: 40px;
}

.footer-title {
  padding-bottom: 20px;
  font-weight: bold;
}
.footer-title .footerLogo {
  border-radius: 50%;
}

.list-unstyled {
  a {
    text-decoration: none;
    color: #fff;

    li {
      // color: #2c3e50;
      margin-bottom: 20px;
      font-size: 15px;
    }
  }
}
.contactData {
  font-size: 15px !important;
  margin-bottom: 20px;
}
.tiny-footer {
  font-size: 14px;
  font-weight: 400;
}
</style>
