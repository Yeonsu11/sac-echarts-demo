(function () {
  // SAC Custom Widget 안에서 DOM 요소를 준비
  let template = document.createElement("template");
  template.innerHTML = "<div id='echart' style='width:100%; height:100%;'></div>";

  class EChartsWidget extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._echartDiv = this._shadowRoot.getElementById("echart");
    }

    connectedCallback() {
      this.render();
    }

    render() {
      // ECharts 초기화
      let chart = echarts.init(this._echartDiv);

      // 👉 GitHub Raw JSON 파일 주소 넣기
      fetch("https://raw.githubusercontent.com/Yeonsu11/sac-echarts-demo/main/line.json")
        .then((res) => res.json())
        .then((option) => {
          chart.setOption(option);  // 불러온 JSON을 ECharts option으로 적용
        })
        .catch((err) => console.error("JSON load error:", err));
    }
  }

  // Custom Element 등록
  customElements.define("com-sap-sample-echarts", EChartsWidget);
})();
