<template>
  <footer class="footer_area">
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
              >Kitobni har kim, har kuni, arzon narxda, qulay tarzda va istalgan
              joyda o'qishi kerak!</small
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
            <div class="footer-title">Blog</div>
            <ul class="list-unstyled">
              <NuxtLink to="/products">
                <li>Loyiha haqida</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>Mulliflar uchun</li>
              </NuxtLink>
              <NuxtLink to="/products">
                <li>Mualliflik huquqi</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">Recipes</div>
            <ul class="list-unstyled">
              <NuxtLink>
                <li>Biz bilan aloqa</li>
              </NuxtLink>
              <NuxtLink>
                <li>Ommaviy offerta</li>
              </NuxtLink>
              <NuxtLink>
                <li>Maxfiylik siyosati</li>
              </NuxtLink>
            </ul>
          </div>
        </div>

        <div class="col-3">
          <div class="footer-widget">
            <div class="footer-title">Contacts</div>
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
              Mirzo-ulug'bek, Navnihol-3 7uy
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
              ©2023 kytab. Mualliflik huquqi va barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
        <div
          class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-end"
        >
          <div class="tiny-footer">Ishlab chiquvchi: Al-raqam</div>
        </div>
      </div>
    </div>
  </footer>
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
