import type { KeenSliderPlugin } from "keen-slider"

const CenterFocus: KeenSliderPlugin = (slider: any) => {
  const update = () => { /* identical logic */ }
  slider.on("created", update)
  slider.on("detailsChanged", update)
}
export default CenterFocus
