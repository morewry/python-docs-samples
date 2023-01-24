import {
  LitElement,
  css,
  html,
} from "https://unpkg.com/lit@2.4.1/index.js?module";
// import {
//   ref,
//   createRef,
// } from "https://unpkg.com/lit@2.4.1/directives/ref.js?module";
// import { asyncReplace } from "https://unpkg.com/lit@2.4.1/directives/async-replace.js?module";
// import { classMap } from "https://unpkg.com/lit@2.4.1/directives/class-map.js?module";
import "https://unpkg.com/@material/mwc-icon-button@0.27.0/mwc-icon-button.js?module";
import "https://unpkg.com/@material/mwc-icon@0.27.0/mwc-icon.js?module";

const STEPS = ["home", /* "game", */ "signup", "login", "checkout", "feedback"];

class RecaptchaDemo extends LitElement {
  static get styles() {
    return css`
      /* Generic */
      ul.unstyled {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      dl.unstyled,
      .unstyled dt,
      .unstyled dd {
        margin: 0;
        padding: 0;
      }
      fieldset {
        border: 0;
        display: block;
        margin: 0;
        padding: 0;
      }
      legend {
        display: block;
        font: inherit;
        margin: 0;
        padding: 0;
      }
      label {
        display: block;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 1;
      }
      label:not(:last-child) {
        margin-bottom: 24px;
      }
      label > span {
        display: block;
        margin-bottom: 12px;
      }
      input,
      textarea {
        background: hsl(var(--gray-60));
        border: 0 solid transparent;
        border-radius: 2px;
        box-sizing: border-box;
        color: inherit;
        display: block;
        font-family: sans-serif;
        line-height: 1;
        margin: 0;
        padding: 12px;
        width: 100%;
      }
      a {
        color: hsl(var(--blue-60));
        display: block;
        font-weight: bold;
        text-decoration: none;
      }
      a:focus,
      a:hover,
      a:active {
        text-decoration: underline;
      }
      p,
      h1,
      h2,
      h3 {
        font: inherit;
        margin: 0;
        padding: 0;
      }
      /* Demo */
      :host {
        display: block;
      }
      :host,
      .demo {
        font-family: sans-serif;
        height: 100%;
        min-height: 100vh;
        max-width: 100%;
        width: 100%;
      }
      .demo {
        /* Blues */
        --blue-10: 217.2, 100%, 88.6%;
        --blue-20: 217.4, 100%, 75.5%;
        --blue-30: 217.5, 100%, 63.3%;
        --blue-40: 214.1, 81.7%, 50.6%;
        --blue-50: 211.3, 100%, 41.4%;
        --blue-60: 214.4, 98%, 38.4%;
        /* Grays */
        --gray-10: 0, 0%, 93.7%;
        --gray-20: 0, 0%, 86.7%;
        --gray-30: 0, 0%, 74.9%;
        --gray-40: 207.3, 4.5%, 52.4%;
        --gray-50: 200, 4.3%, 41%;
        --gray-60: 204, 3.8%, 25.7%;
        /* Indigos */
        --indigo-60: 227.1, 70.7%, 38.8%;
        --indigo-70: 222.6, 81.7%, 25.7%;
        --indigo-80: 225.3, 76%, 14.7%;
        /* Purples */
        --purple-30: 266, 69%, 63.3%;
        --purple-40: 272.1, 62.3%, 40.6%;
        --purple-50: 269.2, 75.2%, 28.4%;
        /* Pinks */
        --pink-20: 321.6, 100%, 77.6%;
        --pink-30: 327.4, 83.3%, 62.4%;
        --pink-40: 323.9, 98.3%, 47.1%;
        --pink-50: 321.3, 92%, 39%;
        /* Greens */
        --green-20: 174.7, 41.3%, 78.6%;
        --green-30: 172.4, 51.9%, 58.4%;
        --green-40: 174.3, 41.8%, 50.8%;
        --green-50: 172.7, 60.2%, 37.5%;
        /* Sizes */
        --drawer-width: 34vw;
        --example-width: 66vw;
        --castle-bottom: 25vh;
      }
      .demo {
        color: white;
        display: grid;
        grid-template-columns: var(--drawer-width) var(--example-width);
        grid-template-rows: 1fr;
        transition: grid-template-columns 300ms ease-out;
      }
      .demo.closed {
        grid-template-columns: 0vw 100vw;
      }
      .drawer {
        --highlight: 240, 52%, 11%;
        --lowlight: 240, 52%, 1%;
        --surface: 240, 52%, 6%;
        --glow: hsl(227, 63%, 14%, 16%);
        --ditch: hsl(227, 63%, 14%, 98%);
        /*
        --lowlight: 245, 100%, 50%;
        --highlight: 0, 100%, 50%;
        */
        background: linear-gradient(to left, var(--ditch) 1px, transparent 1px)
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          radial-gradient(
              ellipse,
              hsl(var(--lowlight), 75%) -10%,
              transparent 69%
            )
            calc((100vw - (var(--drawer-width) / 2)) * -1) -50vh / 100vw 200vh no-repeat
            fixed,
          radial-gradient(
              ellipse,
              hsl(var(--highlight), 75%) -10%,
              transparent 69%
            )
            calc(var(--drawer-width) / 2) -50vh / 100vw 200vh no-repeat fixed,
          linear-gradient(
              to right,
              hsl(var(--lowlight), 25%) 0,
              transparent 50%
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to bottom,
              hsl(var(--lowlight), 35%) 0,
              transparent 50%
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to left,
              hsl(var(--highlight), 15%) 0,
              transparent 25%
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(to top, hsl(var(--highlight), 15%) 0, transparent 50%)
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to right,
              hsl(var(--lowlight), 85%) 2px,
              transparent 2px
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to bottom,
              hsl(var(--lowlight), 85%) 2px,
              transparent 2px
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to left,
              hsl(var(--highlight), 85%) 1px,
              transparent 1px
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          linear-gradient(
              to top,
              hsl(var(--highlight), 85%) 1px,
              transparent 1px
            )
            0 0 / var(--drawer-width) 100vh no-repeat fixed,
          hsl(var(--surface));
        box-shadow: 5px 0 9px 0 var(--glow);
      }
      /* Content */
      .content {
        /* This transform is required due to paint issues with animated elements in drawer
           However, using this also prevents background-attachment: fixed from functioning
           Therefore, background has to be moved to internal wrapper .sticky */
        transform: translateZ(0);
      }
      .content {
        font-family: monospace;
      }
      .content > .sticky {
        /* Due to CSS grid and sticky restrictions, have to add internal wrapper
           to get sticky behavior, centering in viewport behavior, and fixed background */
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: sticky;
        top: 0;
      }
      .content > .sticky {
        --lowlight: 227, 63, 4%;
        --surface: 227, 63%, 9%;
        --highlight: 227, 63%, 14%;
        --glow: 235, 69%, 18%;
        --bottom: calc(100vh - var(--castle-bottom));
        --land-bottom: 10vh;
        background: 
          /* castle */ url("../static/images/castle-alternate-unoptimized.svg")
            center var(--bottom) / auto var(--castle-bottom) no-repeat fixed,
          /* land */ url("../static/images/land-unoptimized.svg") center
            calc(100vh - var(--land-bottom)) / auto var(--land-bottom) no-repeat
            fixed,
          /* pink */
            radial-gradient(
              ellipse at bottom,
              hsl(var(--pink-40), 69%) 0,
              transparent 69%
            )
            center 75vh / 100vw 100vh no-repeat fixed,
          /* purple */
            radial-gradient(
              ellipse at bottom,
              hsl(var(--purple-30), 69%) 0,
              transparent 69%
            )
            center 50vh / 200vw 100vh no-repeat fixed,
          /* blue */
            radial-gradient(circle, hsl(var(--glow), 85%) 0, transparent 44%)
            center -12vh / 100vw 100vh no-repeat fixed,
          /* color */ hsl(var(--surface));
      }
      .content .h1,
      .content .h2 {
        font-family: "Press Start 2P", monospace;
        line-height: 1.25em;
      }
      /* Bar */
      .bar {
        align-items: center;
        display: flex;
        gap: 24px;
      }
      /* Example */
      .example {
        box-sizing: border-box;
        margin: auto;
        max-width: 350px;
        width: 100%;
        /* padding: 48px 0 var(--castle-bottom) 0; */
        padding-bottom: 48px;
        position: relative;
        z-index: 1;
      }
      .example fieldset {
        margin-bottom: 48px;
        position: relative;
        z-index: 1;
      }
      .example legend {
        text-align: center;
        width: 100%;
      }
      .example p {
        margin-bottom: 48px;
      }
      .example legend .h2 {
        background: linear-gradient(
              90deg,
              transparent 0%,
              hsl(var(--purple-50), 25%) 20%,
              hsl(var(--purple-50), 25%) 80%,
              transparent 100%
            )
            center bottom / 100% 1px no-repeat scroll,
          radial-gradient(hsl(var(--purple-50), 25%), transparent 73%) center
            0.8em / 100% 100% no-repeat scroll,
          transparent;
        margin: 0 -2em 16px;
        padding: 0 2em 1em;
        text-shadow: 2px 2px 0 black;
      }
      .example fieldset p {
        margin-bottom: 36px;
      }
      .example .h2 {
        font-size: 80%;
        line-height: 1.25em;
        margin-bottom: 24px;
        text-transform: uppercase;
      }
      .example p {
        line-height: 1.65em;
      }
      /* Form */
      /* TODO any form styles */
      /* Guide */
      .guide {
        --guide-space: 2rem;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
        width: var(--drawer-width);
        z-index: 0;
      }
      .guide .h1 {
        border: 0 solid var(--ditch);
        border-width: 1px 0;
        letter-spacing: 0.5px;
        padding: 12px var(--guide-space);
        text-transform: uppercase;
      }
      .guide .text:first-child .h1 {
        border-top-color: transparent;
      }
      .guide .h1,
      .guide .h2 {
        font-weight: bold;
      }
      .guide .h1 {
        line-height: 1;
      }
      .guide .h2 {
        line-height: 1.25em;
        margin-bottom: 12px;
        text-transform: capitalize;
      }
      .guide .h2,
      .guide p,
      .guide a {
        padding: 0 var(--guide-space);
      }
      .guide .h1,
      .guide p,
      .guide a,
      .guide code {
        margin-bottom: var(--guide-space);
      }
      .guide p {
        line-height: 1.35em;
        max-width: 36em;
      }
      .guide code {
        /* TODO: background color */
        background: hsl(0, 0%, 100%, 4%);
        display: block;
        margin: 0 var(--guide-space) var(--guide-space);
        min-height: 4rem;
        padding: 1rem;
      }
      .guide a {
        --link-color: 218;
        align-items: center;
        color: hsl(var(--link-color), 27%, 68%);
        display: inline-flex;
      }
      .guide a:focus,
      .guide a:hover,
      .guide a:active {
        color: hsl(var(--link-color), 35%, 68%);
        text-decoration: none;
      }
      .guide a span {
        transition: 300ms ease-out;
      }
      .guide a:focus span,
      .guide a:hover span,
      .guide a:active span {
        text-decoration: white dashed underline 1px;
        text-underline-offset: 2px;
      }
      .guide a mwc-icon {
        --mdc-icon-size: 1em;
        color: white;
        flex: 0 0 auto;
        text-decoration: none !important;
        transition: 300ms ease-out;
      }
      .guide a:focus mwc-icon,
      .guide a:hover mwc-icon,
      .guide a:active mwc-icon {
        transform: scale(1.25);
      }
      .guide a span + mwc-icon,
      .guide a mwc-icon + span {
        margin-left: 0.5em;
      }
      /* Menu */
      mwc-icon-button.visible {
        display: block;
      }
      mwc-icon-button.hidden {
        display: none;
      }
      /* Checkout Card */
      dl.cart {
        margin-bottom: 48px;
      }
      .cart .item {
        display: flex;
        align-items: top;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      .cart img {
        height: auto;
        width: 50px;
      }
      .cart .stoplight img {
        margin-top: -13px; /* TODO: sigh magic numbers */
      }
      .cart dt {
        flex: 0 0 5em;
        margin-right: 24px;
        padding-top: 13px;
      }
      .cart dd:not(:last-child) {
        flex: 1 0 auto;
        margin-top: calc(1em + 13px + 12px);
      }
      .cart dd:last-child {
        flex: 0 0 5em;
      }
      /* Guide Score */
      dl.score {
        --custom-blue: 221, 91%, 65%;
        align-items: flex-end;
        display: flex;
        font-family: "Press Start 2P", monospace;
        gap: 0.5em calc(1 * 0.85em);
        line-height: 1;
        margin: 0 var(--guide-space) var(--guide-space);
        max-width: calc(10 * 0.85em);
      }
      .score dt {
        height: 1px;
        left: -10000px;
        overflow: hidden;
        position: absolute;
        top: auto;
        width: 1px;
      }
      .score dd {
        flex: 1 0 auto;
        font-size: 1.25rem;
        line-height: 1.25em;
        text-transform: uppercase;
      }
      dd.score-result {
        color: hsl(var(--custom-blue));
      }
      .score img.hide {
        display: none;
      }
      .score img.show {
        display: block;
      }
      .score img {
        width: 1.75rem;
      }
      /* Slotted Checkbox */
      ::slotted(div.g-recaptcha) {
        display: flex;
        justify-content: center;
        margin: 0 auto 36px;
        position: relative;
        z-index: 1;
      }
      /* Slotted Button / Button */
      .button {
        margin-bottom: 48px;
      }
      ::slotted(button),
      .button {
        appearance: none;
        background: transparent /* hsl(var(--blue-50)) */;
        border: 0;
        border-radius: 0;
        color: inherit;
        cursor: pointer;
        display: inline-block;
        font: inherit;
        font-family: "Press Start 2P", monospace;
        font-size: 0.8rem;
        margin: 0 auto 24px;
        outline: 0;
        padding: 16px 32px;
        position: relative;
        text-transform: uppercase;
        width: 100%;
        z-index: 0;
      }
      .button {
        width: auto;
      }
      /* Button Animation */
      ::slotted(button),
      .button,
      ::slotted(button)::after,
      .button::after,
      ::slotted(button)::before,
      .button::before {
        transition: border 50ms ease-out 0s, border-radius 150ms ease-out 50ms,
          background 100ms ease 0s, box-shadow 200ms ease-out 0s,
          outline 50ms ease-out 0s, text-shadow 50ms ease-out 0s,
          transform 100ms ease-out 0s;
      }
      /* Button Layers */
      ::slotted(button)::after,
      .button::after,
      ::slotted(button)::before,
      .button::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
      }
      /* Button Text */
      ::slotted(button),
      .button {
        text-shadow: 2px 2px black;
      }
      /*
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:hover),
      .button:hover,
      ::slotted(button:active),
      .button:active {
        text-shadow: black 2px 2px, hsl(var(--gray-50)) 4px 4px;
      }
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:hover),
      .button:hover,
      ::slotted(button:active),
      .button:active {
        transform: scale(1.12);
      }
      ::slotted(button:focus)::after,
      .button:focus::after,
      ::slotted(button:focus)::before,
      .button:focus::before,
      ::slotted(button:hover)::after,
      .button:hover::after,
      ::slotted(button:hover)::before,
      .button:hover::before,
      ::slotted(button:active)::after,
      .button:active::after,
      ::slotted(button:active)::before,
      .button:active::before {
        transform: scale(0.89);
      }
      */
      /* Button Shape */
      ::slotted(button)::before,
      .button::before {
        /* Round Glow Shape */
        border-radius: 100%;
        inset: 0 25%;
      }
      ::slotted(button),
      .button,
      ::slotted(button)::after,
      .button::after {
        /* Normal Shape */
        border-radius: 1px;
      }
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:focus)::after,
      .button:focus::after,
      ::slotted(button:hover),
      .button:hover,
      ::slotted(button:hover)::after,
      .button:hover::after,
      ::slotted(button:active),
      .button:active,
      ::slotted(button:active)::after,
      .button:active::after {
        /* Focus/Hover/Active Shape */
        border-radius: 22px;
      }
      /* Button Background */
      ::slotted(button)::after,
      .button::after {
        /* background: hsl(var(--blue-40)); */
        background: hsl(var(--pink-40));
        inset: 0;
      }
      ::slotted(button:active)::after,
      .button:active::after {
        /* background: hsl(var(--blue-50)); */
        background: hsl(var(--pink-50));
      }
      /* Button Border */
      ::slotted(button)::after,
      .button::after {
        border: 1px solid transparent;
      }
      ::slotted(button:focus)::after,
      .button:focus::after,
      ::slotted(button:hover)::after,
      .button:hover::after {
        /* Focus/Hover Border */
        border-bottom: 1px solid rgba(0, 0, 0, 30%);
        border-right: 1px solid rgba(0, 0, 0, 30%);
        border-top: 1px solid rgba(255, 255, 255, 20%);
        border-left: 1px solid rgba(255, 255, 255, 20%);
      }
      ::slotted(button:active)::after,
      .button:active::after {
        /* Active Border */
        border-bottom: 1px solid rgba(255, 255, 255, 20%);
        border-right: 1px solid rgba(255, 255, 255, 20%);
        border-top: 1px solid rgba(0, 0, 0, 30%);
        border-left: 1px solid rgba(0, 0, 0, 30%);
      }
      ::slotted(button:focus-visible)::after,
      .button:focus-visible::after {
        /* Focus Outline */
        outline: 2px solid hsl(var(--pink-30));
        outline-offset: 4px;
      }
      ::slotted(button:hover)::after,
      .button:hover::after,
      ::slotted(button:active)::after,
      .button:active::after {
        outline: none;
      }
      /* Button Shadow */
      ::slotted(button:focus)::after,
      .button:focus::after,
      ::slotted(button:hover)::after,
      .button:hover::after {
        /* Focus/Hover Square Glow */
        box-shadow: 1px 2px 42px 2px hsl(var(--blue-50), 45%);
      }
      ::slotted(button:active)::after,
      .button:active::after {
        /* Active Square Glow */
        box-shadow: 1px 2px 42px 2px rgba(0, 0, 0, 20%);
      }
      ::slotted(button:focus)::before,
      .button:focus::before,
      ::slotted(button:hover)::before,
      .button:hover::before {
        /* Focus/Hover Round Glow */
        box-shadow: 2px 2px 100px 20px hsl(var(--blue-50), 45%);
      }
      ::slotted(button:active)::before,
      .button:active::before {
        /* Active Round Glow */
        box-shadow: 2px 2px 100px 20px rgba(0, 0, 0, 20%);
      }
    `;
  }

  static properties = {
    step: { type: String },
    initialized: { type: Boolean, state: true, attribute: false },
    drawerOpen: { type: Boolean, state: true, attribute: false },
    /* TODO: update score/verdict when payload is standardized */
    score: { type: String },
    verdict: { type: String },
  };

  constructor() {
    super();
    this.step = "home";
    this.initialized = false;
    this.score = undefined;
    this.verdict = undefined;
    this.drawerOpen = true;
  }

  willUpdate() {}

  updated() {
    if (!this.initialized) {
      setTimeout(() => {
        this.initialized = true;
      }, 750);
    }
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  goToNextStep() {
    const nextIndex = STEPS.indexOf(this.step) + 1;
    const nextStep = STEPS[nextIndex];
    if (nextStep) {
      // this.step = nextStep;
      window.location.assign(`${window.location.origin}\\${nextStep}`);
    }
  }

  handleSlotchange() {
    // TODO: remove if not needed
  }

  handleSubmit() {
    if (this.score && this.verdict) {
      this.goToNextStep();
      return;
    }
    // TODO: interrogate slotted button for callback?
  }

  render() {
    const BUTTON = html`
      <slot
        @click=${this.handleSubmit}
        @slotchange=${this.handleSlotchange}
      ></slot>
    `;

    // TODO update login/checkout form examples with feedback
    const FORMS = {
      home: html`
        <section class="example">
          <h2 class="h2">Homepage example</h2>
          <p>
            Text explaining example and next step. For example, might say that
            this a set of reCAPTCHA examples, say that there is a game, and say
            that there is an information panel.
          </p>
          <button @click=${this.handleSubmit} class="button" type="button">
            Continue
          </button>
        </section>
      `,
      checkout: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Checkout example</h2></legend>
            <p>
              Some text prompting to solve the reCAPTCHA and/or click the button
              to see the verdict.
            </p>
            <dl class="unstyled cart">
              <div class="item hydrant">
                <dt>
                  <img
                    alt="Demo Product Hydrant"
                    src="../static/images/item-hydrant-unoptimized.svg"
                  />
                </dt>
                <dd>Hydrant</dd>
                <dd>
                  <label>
                    <span>Amount</span>
                    <input type="number" value="1" disabled />
                  </label>
                </dd>
              </div>
              <div class="item stoplight">
                <dt>
                  <img
                    alt="Demo Product Stoplight"
                    src="../static/images/item-stoplight-unoptimized.svg"
                  />
                </dt>
                <dd>Stoplight</dd>
                <dd>
                  <label>
                    <span>Amount</span>
                    <input type="number" value="1" disabled />
                  </label>
                </dd>
              </div>
            </dl>
            <label>
              <span>Credit card</span>
              <input type="text" value="7777-8888-3333-2222" disabled />
            </label>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      login: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Login example</h2></legend>
            <p>
              Some text prompting to solve the reCAPTCHA and/or click the button
              to see the verdict.
            </p>
            <label>
              <span>Email</span>
              <input type="email" value="user@example.com" disabled />
            </label>
            <label>
              <span>Password</span>
              <input type="password" value="password" disabled />
            </label>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      feedback: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Feedback example</h2></legend>
            <p>Some text prompting to solve the reCAPTCHA and/or click the button to see the verdict.</p>
            <label>
              <span>Feedback</span>
              <textarea disabled />Good job.</textarea>
            </label>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      signup: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Signup example</h2></legend>
            <p>
              Some text prompting to solve the reCAPTCHA and/or click the button
              to see the verdict.
            </p>
            <label>
              <span>Email</span>
              <input type="email" value="user@example.com" disabled />
            </label>
            <label>
              <span>Password</span>
              <input type="password" value="password" disabled />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="password" value="password" disabled />
            </label>
          </fieldset>
          ${BUTTON}
        </form>
      `,
    };

    // TODO undefined case when it expires
    const SCORE = html`
      <div>
        <dl class="score unstyled">
          <dt>Score</dt>
          <dd class="score-result">${this.score || "???"}</dd>
          <dt>Verdict</dt>
          <dd class="verdict-result">
            <img
              src="../static/images/human-color-unoptimized.svg"
              alt="Human"
              class="${this.verdict === "Human" ? "show" : "hide"}"
            />
            <img
              src="../static/images/bot-color-unoptimized.svg"
              alt="Bot"
              class="${this.verdict === "Bot" ? "show" : "hide"}"
            />
          </dd>
        </dl>
        <p>
          How would you interpret the score? For example, what does a score of
          0.4 mean vs 0.6? How would you handle the final score? For example,
          would you output an error, fail silently, use a "redemption path", or
          supplement with another product?
        </p>
      </div>
    `;

    const GUIDES = {
      home: html`
        <div class="guide">
          <section class="text static">
            <h1 class="h1">Pattern</h1>
            <h2 class="h2">On page load</h2>
            <p>
              What is this an example of (score when the page loads)? Why would
              you verify when the page loads? What kind of key? Why? How would
              you create? How would you load JS API? How would you set up the
              challenge?
            </p>
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#page-load"
              target="_blank"
            >
              <span>Learn more about scoring when the page loads</span>
              <mwc-icon>launch</mwc-icon>
            </a>
          </section>
          <section class="text">
            <h1 class="h1">Result</h1>
            ${SCORE}
            <h2 class="h1">Response Details</h2>
            <p>
              How would you fetch the token? For example, do you send a
              client-side request to a backend? How would you create an
              assessment? For example, do you require a backend to send a
              request to Google?
            </p>
            <code>
            TODO code snippet
            </code>
            <a
              href="#"
              target="_blank"
            >
              <mwc-icon>description</mwc-icon>
              <span>View log</span>
            </a>
          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      `,
      checkout: html`
        <div class="guide">
          <section class="text static">
            <h1 class="h1">Score when users interact</h1>
            <p>
              What is this an example of (score on programmatic user action)?
              Why would you use an score programmatically on user interaction?
              What kind of key? Why? How would you create? How would you load JS
              API? How would you set up the challenge?
            </p>
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#user-action"
              target="_blank"
              ><span>Learn more about scoring when users interact</span>
              <mwc-icon>launch</mwc-icon></a
            >
          </section>
          <section class="text">
            <div class="stagger ${this.initialized ? "visible" : "hidden"}">
              <h2 class="h2">What's your score?</h2>
              <p>
                How would you fetch the token? For example, do you send a
                client-side request to a backend? How would you create an
                assessment? For example, do you require a backend to send a
                request to Google?
              </p>
            </div>
            <div
              class="stagger ${this.initialized ? "visible" : "hidden"} ${this
                .verdict
                ? "scored"
                : "unknown"}"
            >
              ${SCORE}
            </div>
            <p>
              How would you interpret the score? For example, what does a score
              of 0.4 mean vs 0.6? How would you handle the final score? For
              example, would you output an error, fail silently, use a
              "redemption path", or supplement with another product?
            </p>
          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      `,
      login: html`
        <div class="guide">
          <section class="text static">
            <h1 class="h1">Add reCAPTCHA on an HTML button</h1>
            <p>
              What is this an example of (score auto bind html button)? Why
              would you use an score auto bound to an html button? What kind of
              key? Why? How would you create? How would you load JS API? How
              would you set up the challenge?
            </p>
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#html-button"
              target="_blank"
              ><span>Learn more about adding reCATPCHA on an HTML button</span>
              <mwc-icon>launch</mwc-icon></a
            >
          </section>
          <section class="text">
            <div class="stagger ${this.initialized ? "visible" : "hidden"}">
              <h2 class="h2">What's your score?</h2>
              <p>
                How would you fetch the token? For example, do you send a
                client-side request to a backend? How would you create an
                assessment? For example, do you require a backend to send a
                request to Google?
              </p>
            </div>
            <div
              class="stagger ${this.initialized ? "visible" : "hidden"} ${this
                .verdict
                ? "scored"
                : "unknown"}"
            >
              ${SCORE}
            </div>
            <div>
              <p>
                How would you interpret the score? For example, what does a
                score of 0.4 mean vs 0.6? How would you handle the final score?
                For example, would you output an error, fail silently, use a
                "redemption path", or supplement with another product?
              </p>
            </div>
          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      `,
      feedback: html`
        <div class="guide">
          <section class="text static">
            <h1 class="h1">Automatically render a checkbox</h1>
            <p>
              What is this an example of (checkbox automatically rendered)? Why
              would you use a checkbox and automatically render it? What kind of
              key? Why? How would you create? How would you load JS API? How
              would you set up the challenge?
            </p>
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages-with-checkbox#expandable-1"
              target="_blank"
              ><span>Learn more about automatically rendering checkboxes</span>
              <mwc-icon>launch</mwc-icon></a
            >
          </section>
          <section class="text">
            <div class="stagger ${this.initialized ? "visible" : "hidden"}">
              <h2 class="h2">What's your score?</h2>
              <p>
                How would you fetch the token? For example, do you send a
                client-side request to a backend? How would you create an
                assessment? For example, do you require a backend to send a
                request to Google?
              </p>
            </div>
            <div
              class="stagger ${this.initialized ? "visible" : "hidden"} ${this
                .verdict
                ? "scored"
                : "unknown"}"
            >
              ${SCORE}
            </div>
            <div>
              <p>
                How would you interpret the score? For example, what does a
                score of 0.4 mean vs 0.6? How would you handle the final score?
                For example, would you output an error, fail silently, use a
                "redemption path", or supplement with another product?
              </p>
            </div>
          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      `,
      signup: html`
        <div class="guide">
          <section class="text static">
            <h1 class="h1">Explicitly render a checkbox</h1>
            <p>
              What is this an example of (checkbox explicitly rendered)? Why
              would you use a checkbox and explicitly render it? What kind of
              key? Why? How would you create? How would you load JS API? How
              would you set up the challenge?
            </p>
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages-with-checkbox#expandable-2"
              target="_blank"
              ><span>Learn more about explicitly rendering checkboxes</span>
              <mwc-icon>launch</mwc-icon></a
            >
          </section>
          <section class="text">
            <div class="stagger ${this.initialized ? "visible" : "hidden"}">
              <h2 class="h2">What's your score?</h2>
              <p>
                How would you fetch the token? For example, do you send a
                client-side request to a backend? How would you create an
                assessment? For example, do you require a backend to send a
                request to Google?
              </p>
            </div>
            <div
              class="stagger ${this.initialized ? "visible" : "hidden"} ${this
                .verdict
                ? "scored"
                : "unknown"}"
            >
              ${SCORE}
            </div>
            <div>
              <p>
                How would you interpret the score? For example, what does a
                score of 0.4 mean vs 0.6? How would you handle the final score?
                For example, would you output an error, fail silently, use a
                "redemption path", or supplement with another product?
              </p>
            </div>
          </section>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      `,
    };

    const BAR = html`
      <div class="bar" id="bar">
        <mwc-icon-button
          icon="help_outline"
          aria-controls="drawer"
          aria-expanded="${this.drawerOpen ? "true" : "false"}"
          @click=${this.toggleDrawer}
          class="${this.drawerOpen ? "hidden" : "visible"}"
        ></mwc-icon-button>
        <mwc-icon-button
          icon="close"
          aria-controls="drawer"
          aria-expanded="${this.drawerOpen ? "true" : "false"}"
          @click=${this.toggleDrawer}
          class="${this.drawerOpen ? "visible" : "hidden"}"
        ></mwc-icon-button>
        <h1 class="h1">reCAPTCHA Examples</h1>
      </div>
    `;

    return html`
      <div id="demo" class="demo ${this.drawerOpen ? "open" : "closed"}">
        <div id="drawer" class="drawer">${GUIDES[this.step]}</div>
        <div id="content" class="content">
          <div class="sticky">${BAR} ${FORMS[this.step]}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("recaptcha-demo", RecaptchaDemo);
