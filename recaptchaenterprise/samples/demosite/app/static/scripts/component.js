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
          background: 
            url("../static/images/castle-alternate-unoptimized.svg") center bottom / auto var(--game-bottom) no-repeat fixed,
            url("../static/images/land-unoptimized.svg") center bottom / auto 10vh no-repeat fixed,
            linear-gradient(to bottom, transparent 0, hsl(var(--pink-40)) 500%) center bottom / 100vw var(--game-bottom) no-repeat fixed,
            radial-gradient(ellipse at bottom, hsl(var(--purple-30)) -25%, transparent 45%) center bottom / 200vw 50vh no-repeat fixed,
            hsl(var(--indigo-80));
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
          --mdc-theme-primary: hsl(var(--indigo-80));
        }
        a {
          color: hsl(var(--blue-60));
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
          background: hsl(var(--blue-50));
          border: 0;
          border-radius: 1px;
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
          z-index: 0;
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
          border-bottom: 1px solid rgba(0,0,0,0.30);
          border-right: 1px solid rgba(0,0,0,0.30);
          border-top: 1px solid rgba(255,255,255,0.20);
          border-left: 1px solid rgba(255,255,255,0.20);
        }
        ::slotted(button:active)::after,
        .button:active::after {
          border-bottom: 1px solid rgba(255,255,255,0.20);
          border-right: 1px solid rgba(255,255,255,0.20);
          border-top: 1px solid rgba(0,0,0,0.30);
          border-left: 1px solid rgba(0,0,0,0.30);
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
          box-shadow: 1px 2px 32px 0 hsl(var(--blue-50), 50%);
        }
        ::slotted(button:active),
        .button:active {
          box-shadow: 1px 2px 32px 0 rgba(0,0,0,0.05);
        }
        ::slotted(button:focus)::before,
        .button:focus::before,
        ::slotted(button:hover)::before,
        .button:hover::before {
          box-shadow: 2px 2px 90px 18px hsl(var(--blue-50), 50%);
        }
        ::slotted(button:active)::before,
        .button:active::before {
          box-shadow: 2px 2px 90px 18px rgba(0,0,0,0.20);
        }
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
          text-shadow: 1px 2px 0 black, -1px -1px 1px hsl(var(--purple-30)), 0 0 15px hsl(var(--indigo-80));
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
  