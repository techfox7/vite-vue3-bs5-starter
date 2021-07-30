<template>
  <div class="py-5 text-center">
    <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h2>{{ t('intro.desc') }}</h2>
    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
  </div>

  <div class="row g-5">
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Your cart</span>
        <span class="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Product name</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$12</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Second product</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$8</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Third item</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">−$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <button type="submit" class="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Billing address</h4>
      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input id="firstName" type="text" class="form-control" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input id="lastName" type="text" class="form-control" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input id="username" type="text" class="form-control" placeholder="Username" required>
              <div class="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input id="email" type="email" class="form-control" placeholder="you@example.com">
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input id="address" type="text" class="form-control" placeholder="1234 Main St" required>
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="col-12">
            <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
            <input id="address2" type="text" class="form-control" placeholder="Apartment or suite">
          </div>

          <div class="col-md-5">
            <label for="country" class="form-label">Country</label>
            <select id="country" class="form-select" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">State</label>
            <select id="state" class="form-select" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div class="col-md-3">
            <label for="zip" class="form-label">Zip</label>
            <input id="zip" type="text" class="form-control" placeholder="" required>
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <hr class="my-4">

        <div class="form-check">
          <input id="same-address" type="checkbox" class="form-check-input">
          <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>

        <div class="form-check">
          <input id="save-info" type="checkbox" class="form-check-input">
          <label class="form-check-label" for="save-info">Save this information for next time</label>
        </div>

        <hr class="my-4">

        <h4 class="mb-3">Payment</h4>

        <div class="my-3">
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
            <label class="form-check-label" for="credit">Credit card</label>
          </div>
          <div class="form-check">
            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
            <label class="form-check-label" for="debit">Debit card</label>
          </div>
          <div class="form-check">
            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
            <label class="form-check-label" for="paypal">PayPal</label>
          </div>
        </div>

        <div class="row gy-3">
          <div class="col-md-6">
            <label for="cc-name" class="form-label">Name on card</label>
            <input id="cc-name" type="text" class="form-control" placeholder="" required>
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>

          <div class="col-md-6">
            <label for="cc-number" class="form-label">Credit card number</label>
            <input id="cc-number" type="text" class="form-control" placeholder="" required>
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>

          <div class="col-md-3">
            <label for="cc-expiration" class="form-label">Expiration</label>
            <input id="cc-expiration" type="text" class="form-control" placeholder="" required>
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>

          <div class="col-md-3">
            <label for="cc-cvv" class="form-label">CVV</label>
            <input id="cc-cvv" type="text" class="form-control" placeholder="" required>
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>

        <hr class="my-4">

        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>

        <hr class="my-4">

        <button id="liveToastBtn" type="button" class="w-100 btn btn-secondary btn-lg" @click="showToast">
          Show live toast
        </button>

        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
          <div id="liveToast" ref="toastbox" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import * as bootstrap from 'bootstrap'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const toastbox = ref()

    const showToast = () => {
      const toast = new bootstrap.Toast(toastbox.value)
      toast.show()
    }

    return {
      t,
      toastbox,
      showToast,
    }
  },
})
</script>
