(function () {
  let template = document.createElement("template");
  template.innerHTML = "<div id='echart' style='width:100%; height:100%;'></div>";

  class EChartsWidget extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._echartDiv = this._shadowRoot.getElementById("echart");

      // 👉 ECharts 라이브러리 로드
      if (!window.echarts) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js";
        script.onload = () => this.render();
        this._shadowRoot.appendChild(script);
      }

      render();
    }

    connectedCallback() {
      if (window.echarts) {
        this.render();
      }
    }

    render() {
      if (!window.echarts) return; // 아직 로드 안 됐으면 대기

      let chart = echarts.init(this._echartDiv);

      fetch("https://raw.githubusercontent.com/Yeonsu11/sac-echarts-demo/main/line.json")
        .then((res) => res.json())
        .then((option) => {
          chart.setOption(option);
        })
        .catch((err) => console.error("JSON load error:", err));
    }
  }

  customElements.define("com-sap-sample-echarts", EChartsWidget);
})();
