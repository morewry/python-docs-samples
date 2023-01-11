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
        /* text-align: center; */
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
        --game-bottom: 25vh;
      }
      .demo {
        color: white;
        display: grid;
        grid-template-columns: 50vw 50vw;
        grid-template-rows: 1fr;
        transition: grid-template-columns 150ms ease-out;
      }
      .demo.closed {
        grid-template-columns: 0vw 100vw;
      }
      .drawer {
        background: #111;
        border: 2px solid transparent;
        border-color: #000 #333 #333 #000;
        overflow-y: visible;
      }
      .closed .drawer {
        overflow: hidden;
      }
      /* Content */
      .content {
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
      .open .content {
        background-position: 75% bottom, 50% bottom, 50% bottom, 50% bottom,
          50% bottom;
      }
      .content {
        font-family: monospace;
      }
      .content > .sticky {
        position: sticky;
        top: 0;
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
        min-height: 100vh;
        margin: auto;
        max-width: 350px;
        padding: 48px 0 var(--game-bottom) 0;
        position: relative;
        z-index: 1;
      }
      .example .h2,
      .example p {
        margin-bottom: 24px;
      }
      .example fieldset {
        position: relative;
        z-index: 1;
      }
      /* Form */
      /* TODO */
      /* Guide */
      .guide {
        box-sizing: border-box;
        padding: 2rem 2rem 0;
        width: 50vw;
        height: 300vh;
      }
      .guide p,
      .guide a,
      .guide .h1,
      .guide dl.score {
        margin-bottom: 2rem;
      }
      .guide .h1 {
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
      mwc-icon-button {
        color: white;
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
      /* Checkout Card */
      dl.cart {
      }
      .cart .item {
        display: flex;
        align-items: top;
        justify-content: space-between;
      }
      .cart dt {
        flex: 0 0 5em;
        margin-right: 24px;
        margin-top: 12px;
      }
      .cart dd:not(:last-child) {
        flex: 1 0 auto;
        margin-top: calc(1em + 12px);
      }
      .cart dd:last-child {
        flex: 0 0 5em;
      }
      /* Guide Score */
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
      /* Slotted Checkbox */
      ::slotted(div.g-recaptcha) {
        display: flex;
        justify-content: center;
        margin: 0 auto 24px;
        position: relative;
        z-index: 1;
      }
      /* Slotted Button / Button */
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
          background 100ms ease 0s, box-shadow 200ms ease-out 0s, outline 50ms ease-out 0s,
          text-shadow 50ms ease-out 0s, transform 100ms ease-out 0s;
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
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:hover),
      .button:hover,
      ::slotted(button:active),
      .button:active {
        text-shadow: black 2px 2px, hsl(var(--gray-50)) 4px 4px;
      }
      ::slotted(button),
      .button {
        text-shadow: 2px 2px black;
      }
      ::slotted(button:focus),
      .button:focus,
      ::slotted(button:hover),
      .button:hover,
      ::slotted(button:active),
      .button:active {
        transform: scale(1.24);
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
        transform: scale(0.81);
      }
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
              <div class="item">
                <dt>
                  <img
                    alt="Demo Product Shield"
                    src="../static/images/shield-unoptimized.svg"
                  />
                </dt>
                <dd>Castle Shield</dd>
                <dd>
                  <label>
                    <span>Amount</span>
                    <input type="number" value="1" disabled />
                  </label>
                </dd>
              </div>
              <div class="item">
                <dt>
                  <img
                    alt="Demo Product Magnifier"
                    src="../static/images/magnifier-unoptimized.svg"
                  />
                </dt>
                <dd>Bot Inspector</dd>
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
        <dd>${this.verdict || "?????"}</dd>
      </dl>
    `;

    const GUIDES = {
      home: html`
        <section class="guide">
          <h1 class="h1">Score when the page loads</h1>
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
          <div class="stagger ${this.initialized ? "visible" : "hidden"}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? "visible" : "hidden"}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </section>
      `,
      checkout: html`
        <section class="guide">
          <h1 class="h1">Score when users interact</h1>
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
          <div class="stagger ${this.initialized ? "visible" : "hidden"}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? "visible" : "hidden"}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </section>
      `,
      login: html`
        <section class="guide">
          <h1 class="h1">Add reCAPTCHA on an HTML button</h1>
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
          <div class="stagger ${this.initialized ? "visible" : "hidden"}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? "visible" : "hidden"}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </section>
      `,
      feedback: html`
        <section class="guide">
          <h1 class="h1">Automatically render a checkbox</h1>
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
          <div class="stagger ${this.initialized ? "visible" : "hidden"}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? "visible" : "hidden"}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </section>
      `,
      signup: html`
        <section class="guide">
          <h1 class="h1">Explicitly render a checkbox</h1>
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
          <div class="stagger ${this.initialized ? "visible" : "hidden"}">
            <h2 class="h1">What's your score?</h2>
            <p>
              How would you fetch the token? How would you create an assessment?
            </p>
            ${SCORE}
            <p class="stagger ${this.verdict ? "visible" : "hidden"}">
              How would you interpret the score? How would you handle the final
              score?
            </p>
          </div>
        </section>
      `,
    };

    const BAR = html`
      <div class="bar" id="bar">
        <mwc-icon-button
          icon="menu"
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
