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
import "https://unpkg.com/@material/mwc-textfield@0.27.0/mwc-textfield.js?module";
import "https://unpkg.com/@material/mwc-textarea@0.27.0/mwc-textarea.js?module";
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
        --blue-10: #c5dbff;
        --blue-20: #82b1ff;
        --blue-30: #448aff;
        --blue-40: #1a73e8;
        --blue-50: #0065d3;
        --blue-60: #0254c2;
        /* Grays */
        --gray-10: #efefef;
        --gray-20: #dddddd;
        --gray-30: #bfbfbf;
        --gray-40: #80868b;
        --gray-50: #646a6d;
        --gray-60: #3f4244;
        /* Indigos */
        --indigo-60: #1d3ba9;
        --indigo-70: #0c2b77;
        --indigo-80: #091742;
        /* Purples */
        --purple-30: #9961e2;
        --purple-40: #6c27a8;
        --purple-50: #47127f;
        /* Pinks */
        --pink-20: #ff8dd6;
        --pink-30: #ef4fa6;
        --pink-40: #ee0290;
        --pink-50: #bf087e;
        /* Greens */
        --green-20: #b2dfdb;
        --green-30: #5eccbe;
        --green-40: #4db6ac;
        --green-50: #26998B;
        /* Sizes */
        --game-bottom: 25vh;
      }
      .demo {
        background: 
          url("../static/images/castle-alternate-unoptimized.svg") center bottom / auto var(--game-bottom) no-repeat fixed,
          url("../static/images/land-unoptimized.svg") center bottom / auto 10vh no-repeat fixed,
          linear-gradient(to bottom, transparent 0, var(--pink-40) 500%) center bottom / 100vw var(--game-bottom) no-repeat fixed,
          radial-gradient(ellipse at bottom, var(--purple-30) -25%, transparent 45%) center bottom / 200vw 50vh no-repeat fixed,
          var(--indigo-80);
      }
      mwc-drawer[open].demo {
        background-position: 75% bottom, 50% bottom, 50% bottom, 50% bottom, 50% bottom;
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
      mwc-textfield {
        display: block;
        margin-bottom: 24px;
        width: 100%;
      }
      mwc-textarea {
        display: block;
        margin-bottom: 24px;
      }
      mwc-drawer {
        --mdc-drawer-width: 50vw;
      }
      mwc-drawer[open] mwc-top-app-bar {
        /* Default width of drawer is 256px. See CSS Custom Properties below */
        --mdc-top-app-bar-width: calc(100% - var(--mdc-drawer-width, 50vw));
      }
      mwc-top-app-bar {
        --mdc-theme-primary: var(--indigo-80);
      }
      a {
        color: var(--blue);
        display: block;
        font-weight: bold;
        text-align: center;
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
        /* background: var(--blue-40); */
        background: var(--pink-40);
        border: 1px solid transparent;
        border-radius: 4px;
        color: inherit;
        cursor: pointer;
        display: block;
        font: inherit;
        font-family: "Press Start 2P", monospace;
        margin: 0 auto 24px;
        outline: 0;
        padding: 16px 32px;
        position: relative;
        text-shadow: 2px 2px black;
        width: 100%;
      }
      ::slotted(button:focus),
      .button:focus {
        /* TODO focus styles */
      }
      ::slotted(button:hover),
      .button:hover {
        /*
        background: var(--blue-30);
        box-shadow: 1px 2px 52px 2px var(--blue-50);
        border-bottom: 1px solid var(--blue-60);
        border-right: 1px solid var(--blue-60);
        border-top: 1px solid var(--blue-40);
        border-left: 1px solid var(--blue-40);
        */
        background: var(--pink-30);
        box-shadow: 1px 2px 52px 2px var(--blue-50);
        border-bottom: 1px solid var(--pink-60);
        border-right: 1px solid var(--pink-60);
        border-top: 1px solid var(--pink-40);
        border-left: 1px solid var(--pink-40);
      }
      ::slotted(button:active),
      .button:active {
        box-shadow: none;
        /* background: var(--blue-50); */
        background: var(--pink-50);
      }
      /* 
      TODO round shadow
      ::slotted(button)::after,
      .button::after {
        content: "";
        display: block;
        background: red;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: 10;
      }
      */
      /* Form */
      /* TODO */
      /* Guide */
      /* TODO */
      ul.temp {
        height: 200vh;
      }
      /* Score */
      dl.score {
        align-items: center;
        bottom: 0;
        color: white;
        display: grid;
        font-family: "Press Start 2P", monospace;
        font-size: 1.25rem;
        gap: 6px calc(1 * 0.85em);
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        left: 0;
        line-height: 1;
        max-width: calc(14 * 0.85em);
        padding: 12px;
        position: fixed;
        text-shadow: 1px 2px 0 black, -1px -1px 1px var(--purple-30), 0 0 15px var(--indigo-80);
      }
      mwc-drawer[open] dl.score {
        left: 50vw;
      }
      .score dt {
        text-align: right;
      }
      .score img {
        display: block;
        width: 1.75rem;
      }
    `;
  }

  static properties = {
    step: { type: String },
    drawerOpen: { type: Boolean, state: true, attribute: false },
    /* TODO: update score/verdict when payload is standardized */
    score: { type: String },
    verdict: { type: String },
  };

  button = createRef();

  constructor() {
    super();
    this.step = "home";
    this.score = undefined;
    this.verdict = undefined;
    this.drawerOpen = true;
  }

  willUpdate() {}

  updated() {
    setTimeout(() => {
      if (this.button.value) {
        const button = this.button.value.shadowRoot.querySelector("button");
        const slot = button.querySelector(".slot-container");
        button.style.height = "auto";
        button.style.width = "100%";
        slot.style.flexDirection = "column";
        slot.style.width = "100%";
      }
    }, 0);
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
      <slot ${ref(this.button)} @click=${this.handleSubmit} @slotchange=${this.handleSlotchange}></slot>
    `;

    const FORMS = {
      home: html`
        <section class="example">
          <h2 class="h2">Homepage example</h2>
          <p>Text explaining example and next step.</p>
          <button
            @click=${this.handleSubmit}
            class="button"
            type="button"
          >
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
                <mwc-textfield
                  label="Amount"
                  type="number"
                  value="1"
                ></mwc-textfield>
              </dd>
            </dl>
            <mwc-textfield
              label="Address"
              type="text"
              value="123 Address Street City, ST 00000"
            ></mwc-textfield>
            <mwc-textfield
              label="Credit card"
              type="number"
              value="7777-8888-3333-2222"
            ></mwc-textfield>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      login: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Login example</h2></legend>
            <mwc-textfield
              label="Email"
              type="email"
              value="user@example.com"
            ></mwc-textfield>
            <mwc-textfield
              label="Password"
              type="password"
              value="password"
            ></mwc-textfield>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      review: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Review example</h2></legend>
            <mwc-textarea label="Review" value="Good job."></mwc-textarea>
          </fieldset>
          ${BUTTON}
        </form>
      `,
      signup: html`
        <form class="example">
          <fieldset>
            <legend><h2 class="h2">Signup example</h2></legend>
            <mwc-textfield
              label="Email"
              type="email"
              value="user@example.com"
            ></mwc-textfield>
            <mwc-textfield
              label="Password"
              type="password"
              value="password"
            ></mwc-textfield>
            <mwc-textfield
              label="Confirm Password"
              type="password"
              value="password"
            ></mwc-textfield>
          </fieldset>
          ${BUTTON}
        </form>
      `,
    };

    const SCORE = html`
      <dl class="score unstyled">
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
        <dd>${this.verdict}</dd>
      </dl>
    `;

    const GUIDES = {
      home: html`
        <h1 class="h1" slot="title">Score when the page loads</h1>
        <ul class="temp">
          <li>What is this an example of? (Answer: score on page load)</li>
          <li>Why would you verify when the page loads?</li>
          <li>What kind of key? Why? How would you create?</li>
          <li>How would you load JS API?</li>
          <li>How would you set up the challenge?</li>
          <li>How would you fetch the token?</li>
          <li>How would you create an assessment?</li>
          <li>How would you interpret the score?</li>
          <li>How would you handle the final score?</li>
        </ul>
      `,
      checkout: html`
        <h1 class="h1" slot="title">Score when users interact</h1>
        <ul class="temp">
          <li>
            What is this an example of? (Answer: score on programmatic user
            action)
          </li>
          <li>
            Why would you use an score programmatically on user interaction?
          </li>
          <li>What kind of key? Why? How would you create?</li>
          <li>How would you load JS API?</li>
          <li>How would you set up the challenge?</li>
          <li>How would you fetch the token?</li>
          <li>How would you create an assessment?</li>
          <li>How would you interpret the score?</li>
          <li>How would you handle the final score?</li>
        </ul>
      `,
      login: html`
        <h1 class="h1" slot="title">Add reCAPTCHA on an HTML button</h1>
        <ul class="temp">
          <li>
            What is this an example of? (Answer: score auto bind html button)
          </li>
          <li>Why would you use an score auto bound to an html button?</li>
          <li>What kind of key? Why? How would you create?</li>
          <li>How would you load JS API?</li>
          <li>How would you set up the challenge?</li>
          <li>How would you fetch the token?</li>
          <li>How would you create an assessment?</li>
          <li>How would you interpret the score?</li>
          <li>How would you handle the final score?</li>
        </ul>
      `,
      review: html`
        <h1 class="h1" slot="title">Automatically render a checkbox</h1>
        <ul class="temp">
          <li>
            What is this an example of? (Answer: checkbox automatically
            rendered)
          </li>
          <li>Why would you use a checkbox and automatically render it?</li>
          <li>What kind of key? Why? How would you create?</li>
          <li>How would you load JS API?</li>
          <li>How would you set up the challenge?</li>
          <li>How would you fetch the token?</li>
          <li>How would you create an assessment?</li>
          <li>How would you interpret the score?</li>
          <li>How would you handle the final score?</li>
        </ul>
      `,
      signup: html`
        <h1 class="h1" slot="title">Explicitly render a checkbox</h1>
        <ul class="temp">
          <li>
            What is this an example of? (Answer: checkbox explicitly rendered)
          </li>
          <li>Why would you use a checkbox and explicitly render it?</li>
          <li>What kind of key? Why? How would you create?</li>
          <li>How would you load JS API?</li>
          <li>How would you set up the challenge?</li>
          <li>How would you fetch the token?</li>
          <li>How would you create an assessment?</li>
          <li>How would you interpret the score?</li>
          <li>How would you handle the final score?</li>
        </ul>
      `,
    };

    const BAR = html`
      <mwc-top-app-bar>
        <mwc-icon-button
          slot="navigationIcon"
          icon="menu"
          @click=${this.toggleDrawer}
        ></mwc-icon-button>
        <h1 slot="title" class="h1">reCAPTCHA Example</h1>
        ${FORMS[this.step]} ${SCORE}
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
