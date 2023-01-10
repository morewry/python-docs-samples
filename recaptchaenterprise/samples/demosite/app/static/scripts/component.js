import {
  LitElement,
  css,
  html,
} from "https://unpkg.com/lit@2.4.1/index.js?module";
import {
  ref,
  createRef,
} from "https://unpkg.com/lit@2.4.1/directives/ref.js?module";
// import { asyncReplace } from "https://unpkg.com/lit@2.4.1/directives/async-replace.js?module";
// import { classMap } from "https://unpkg.com/lit@2.4.1/directives/class-map.js?module";
import "https://unpkg.com/@material/mwc-fab@0.27.0/mwc-fab.js?module";
import "https://unpkg.com/@material/mwc-drawer@0.27.0/mwc-drawer.js?module";
import "https://unpkg.com/@material/mwc-top-app-bar@0.27.0/mwc-top-app-bar.js?module";
import "https://unpkg.com/@material/mwc-icon-button@0.27.0/mwc-icon-button.js?module";

const STEPS = ["home", /* "game", */ "signup", "login", "checkout", "review"];

class RecaptchaDemo extends LitElement {
  static get styles() {
    return css`
      /* ... */
      :host {
        display: block;
      }
      :host,
      .demo {
        font-family: sans-serif;
        height: 100%;
        min-height: 100vh;
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
        --game-bottom: 25vh;
      }
      .demo {
        background: url("../static/images/castle-alternate-unoptimized.svg")
            center bottom / auto var(--game-bottom) no-repeat fixed,
          url("../static/images/land-unoptimized.svg") center bottom / auto 10vh
            no-repeat fixed,
          linear-gradient(to bottom, transparent 0, hsl(var(--pink-40)) 500%)
            center bottom / 100vw var(--game-bottom) no-repeat fixed,
          radial-gradient(
              ellipse at bottom,
              hsl(var(--purple-30)) -25%,
              transparent 45%
            )
            center bottom / 200vw 50vh no-repeat fixed,
          hsl(var(--indigo-80));
      }
      mwc-drawer[open].demo {
        background-position: 75% bottom, 50% bottom, 50% bottom, 50% bottom,
          50% bottom;
      }
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
      img {
        height: auto;
        max-width: 5vw;
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
        font-family: "Press Start 2P", monospace;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      label {
        display: block;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 1;
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
        color: white;
        display: block;
        font-family: sans-serif;
        line-height: 1;
        margin: 0;
        padding: 12px;
        width: 100%;
      }
      mwc-drawer {
        --mdc-drawer-width: 50vw;
      }
      mwc-drawer[open] mwc-top-app-bar {
        /* Default width of drawer is 256px. See CSS Custom Properties below */
        --mdc-top-app-bar-width: calc(100% - var(--mdc-drawer-width, 50vw));
      }
      mwc-top-app-bar {
        --mdc-theme-primary: hsl(var(--indigo-80));
      }
      a {
        color: hsl(var(--blue-60));
        display: block;
        font-weight: bold;
        /* text-align: center; */
        text-decoration: none;
      }
      p,
      h1,
      h2,
      h3 {
        font: inherit;
        margin: 0;
        padding: 0;
      }
      /* Shared */
      .h1 {
        font-family: "Press Start 2P", monospace;
        font-size: 1rem;
        margin: 0;
        padding: 0;
      }
      .h2 {
        font-family: "Press Start 2P", monospace;
        font-size: 1rem;
        margin: 0;
        padding: 0;
      }
      /* Content */
      .content {
        /* cannot use flex or grid due to mwc-top-app-bar */
        font-family: monospace;
        height: 100%;
        min-height: 100vh;
      }
      /* Example */
      .example {
        color: white;
        flex: 1 0 auto;
        margin: auto;
        max-width: 350px;
        padding: 48px 0 var(--game-bottom) 0;
      }
      .example .h2,
      .example p {
        margin-bottom: 24px;
      }
      .example mwc-top-app-bar {
        margin: 0 0 auto;
      }
      .example fieldset {
        position: relative;
        z-index: 1;
      }
      /* Checkbox */
      ::slotted(div.g-recaptcha) {
        display: flex;
        justify-content: center;
        margin: 0 auto 24px;
      }
      /* Button */
      ::slotted(button),
      .button {
        appearance: none;
        background: transparent /* hsl(var(--blue-50)) */;
        border: 0;
        border-radius: 1px;
        color: inherit;
        cursor: pointer;
        display: inline-block;
        font: inherit;
        font-family: "Press Start 2P", monospace;
        font-size: 0.80rem;
        margin: 0 auto 24px;
        outline: 0;
        padding: 16px 32px;
        position: relative;
        text-shadow: 2px 2px black;
        width: 100%;
        z-index: 0;
      }
      .button {
        width: auto;
      }
      /* Button Layers */
      ::slotted(button)::after,
      .button::after,
      ::slotted(button)::before,
      .button::before {
        border-radius: 1px;
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
      }
      /* Button Background */
      ::slotted(button)::after,
      .button::after {
        /* background: hsl(var(--blue-40)); */
        background: hsl(var(--pink-40));
        inset: 0;
      }
      ::slotted(button:focus)::after,
      .button:focus::after {
        /* TODO focus styles */
      }
      ::slotted(button:hover)::after,
      .button:hover::after {
        /*
        background: hsl(var(--blue-30));
        */
        /* TODO hover background: hsl(var(--pink-30)); */
      }
      ::slotted(button:active)::after,
      .button:active::after {
        /* background: hsl(var(--blue-50)); */
        background: hsl(var(--pink-50));
      }
      /* Button Border */
      ::slotted(button:focus)::after,
      .button:focus::after,
      ::slotted(button:hover)::after,
      .button:hover::after {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }
      ::slotted(button:active)::after,
      .button:active::after {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        border-left: 1px solid rgba(0, 0, 0, 0.3);
      }
      /* Button Shadow */
      ::slotted(button)::before,
      .button::before {
        border-radius: 100%;
        inset: 0 25%;
      }
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:hover),
      .button:hover {
        box-shadow: 1px 2px 32px 0 hsl(var(--blue-50), 40%);
      }
      ::slotted(button:active),
      .button:active {
        box-shadow: 1px 2px 32px 0 rgba(0, 0, 0, 5%);
      }
      ::slotted(button:focus)::before,
      .button:focus::before,
      ::slotted(button:hover)::before,
      .button:hover::before {
        box-shadow: 2px 2px 90px 18px hsl(var(--blue-50), 40%);
      }
      ::slotted(button:active)::before,
      .button:active::before {
        box-shadow: 2px 2px 90px 18px rgba(0, 0, 0, 0.2);
      }
      /* Form */
      /* TODO */
      dl.cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .cart dt {
        flex: 1 0 auto;
        margin-right: 24px;
      }
      .cart dt img {
        margin-top: -24px; /* TODO optimize svg to remove padding */
      }
      .cart dd {
        flex: 1 1 auto;
      }
      /* Guide */
      mwc-drawer {
        --mdc-theme-surface: hsl(var(--indigo-80), 75%);
      }
      .guide {
        margin: 0 2rem;
      }
      .guide.h1 {
        margin: 0 1rem;
      }
      .guide,
      .guide.h1 {
        color: white;
      }
      .guide p,
      .guide a,
      .guide h2.h1,
      .guide dl.score {
        margin-bottom: 2rem;
      }
      .guide.h1,
      .guide h2.h1 {
        line-height: 1.25em;
      }
      .guide a {
        color: hsl(var(--pink-40));
        margin-bottom: 3rem;
      }
      .stagger dl.stagger {
        transition-delay: 300ms;
      }
      .stagger p.stagger {
        transition-delay: 900ms;
      }
      mwc-icon-button,
      .stagger {
        transition: opacity 500ms ease-out;
      }
      mwc-icon-button.hidden {
        display: none;
      }
      mwc-icon-button.hidden,
      .stagger.hidden,
      .stagger.hidden .score {
        opacity: 0;
      }
      mwc-icon-button.visible,
      .stagger.visible,
      .stagger.visible .score {
        opacity: 1;
      }
      /* Score */
      dl.score {
        align-items: center;
        display: flex;
        font-family: "Press Start 2P", monospace;
        gap: 6px calc(1 * 0.85em);
        line-height: 1;
        max-width: calc(14 * 0.85em);
        padding: 0;
      }
      .score dt {
        flex: 0 0 auto;
      }
      .score dd {
        flex: 1 0 auto;
      }
      .score img {
        display: block;
        width: 1.75rem;
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

  button = createRef();

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
        ${ref(this.button)}
        @click=${this.handleSubmit}
        @slotchange=${this.handleSlotchange}
      ></slot>
    `;

    const FORMS = {
      home: html`
        <section class="example">
          <h2 class="h2">Homepage example</h2>
          <p>Text explaining example and next step.</p>
          <button @click=${this.handleSubmit} class="button" type="button">
            Continue
          </button>
        </section>
      `,
      checkout: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Checkout example</h2></legend>
            <dl class="unstyled cart">
              <dt>
                <img
                  alt="Demo Product Shield"
                  src="../static/images/shield-unoptimized.svg"
                />
              </dt>
              <dd>
                <label>
                  <span>Amount</span>
                  <input type="number" value="1" disabled />
                </label>
              </dd>
            </dl>
            <label>
              <span>Credit card</span>
              <input type="number" value="7777-8888-3333-2222" disabled />
            </label>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      login: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Login example</h2></legend>
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
      review: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Feedback example</h2></legend>
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

    const SCORE = html`
      <dl class="score stagger unstyled">
        <!-- 
        TODO: best practice re: local BE assessment payload
        <dt>Score:</dt>
        <dd>${this.score}</dd>
        -->
        <dt>
          <img
            alt="reCAPTCHA assessment"
            class="magnifier"
            src="../static/images/magnifier-unoptimized.svg"
          />
        </dt>
        <dd>${this.verdict || '?????'}</dd>
      </dl>
    `;

    const GUIDES = {
      home: html`
        <h1 class="h1 guide" slot="title">Score when the page loads</h1>
        <div class="guide">
          <p>
            What is this an example of (score when the page loads)? Why would
            you verify when the page loads? What kind of key? Why? How would you
            create? How would you load JS API? How would you set up the
            challenge?
          </p>
          <a
            href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#page-load"
            target="_blank"
            >Learn more about...</a
          >
          <div class="stagger ${this.initialized ? 'visible' : 'hidden'}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? 'visible' : 'hidden'}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </div>
      `,
      checkout: html`
        <h1 class="h1 guide" slot="title">Score when users interact</h1>
        <div class="guide">
          <p>
            What is this an example of (score on programmatic user action)? Why
            would you use an score programmatically on user interaction? What
            kind of key? Why? How would you create? How would you load JS API?
            How would you set up the challenge?
          </p>
          <a
            href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#user-action"
            target="_blank"
            >Learn more about...</a
          >
          <div class="stagger ${this.initialized ? 'visible' : 'hidden'}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? 'visible' : 'hidden'}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </div>
      `,
      login: html`
        <h1 class="h1 guide" slot="title">Add reCAPTCHA on an HTML button</h1>
        <div class="guide">
          <p>
            What is this an example of (score auto bind html button)? Why would
            you use an score auto bound to an html button? What kind of key?
            Why? How would you create? How would you load JS API? How would you
            set up the challenge?
          </p>
          <a
            href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#html-button"
            target="_blank"
            >Learn more about...</a
          >
          <div class="stagger ${this.initialized ? 'visible' : 'hidden'}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? 'visible' : 'hidden'}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </div>
      `,
      review: html`
        <h1 class="h1 guide" slot="title">Automatically render a checkbox</h1>
        <div class="guide">
          <p>
            What is this an example of (checkbox automatically rendered)? Why
            would you use a checkbox and automatically render it? What kind of
            key? Why? How would you create? How would you load JS API? How would
            you set up the challenge?
          </p>
          <a
            href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages-with-checkbox#expandable-1"
            target="_blank"
            >Learn more about...</a
          >
          <div class="stagger ${this.initialized ? 'visible' : 'hidden'}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? 'visible' : 'hidden'}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </div>
      `,
      signup: html`
        <h1 class="h1 guide" slot="title">Explicitly render a checkbox</h1>
        <div class="guide">
          <p>
            What is this an example of (checkbox explicitly rendered)? Why would
            you use a checkbox and explicitly render it? What kind of key? Why?
            How would you create? How would you load JS API? How would you set
            up the challenge?
          </p>
          <a
            href="https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages-with-checkbox#expandable-2"
            target="_blank"
            >Learn more about...</a
          >
          <div class="stagger ${this.initialized ? 'visible' : 'hidden'}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? 'visible' : 'hidden'}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </div>
      `,
    };

    const BAR = html`
      <mwc-top-app-bar>
        <mwc-icon-button
          slot="navigationIcon"
          icon="menu"
          @click=${this.toggleDrawer}
          class="${this.drawerOpen ? 'hidden' : 'visible'}"
        ></mwc-icon-button>
        <mwc-icon-button
          slot="navigationIcon"
          icon="close"
          @click=${this.toggleDrawer}
          class="${this.drawerOpen ? 'visible' : 'hidden'}"
        ></mwc-icon-button>
        <h1 slot="title" class="h1">reCAPTCHA Example</h1>
        ${FORMS[this.step]}
      </mwc-top-app-bar>
    `;

    return html`
      <mwc-drawer
        class="demo"
        hasheader
        type="dismissible"
        ?open=${this.drawerOpen}
      >
        ${GUIDES[this.step]}
        <section slot="appContent" class="content">${BAR}</section>
      </mwc-drawer>
    `;
  }
}

customElements.define("recaptcha-demo", RecaptchaDemo);
