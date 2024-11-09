import { InfoIconCardProps } from "./infoIconCard";

export default  function Caloric ({ selected} : InfoIconCardProps) {
    const fillColor = selected ? "#D1EDE8" : "white";
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.52594 9.88591C8.52594 9.07421 7.96803 7.96488 6.95666 6.76194C6.90068 6.69516 6.83058 6.64164 6.75141 6.60524C6.67225 6.56884 6.58599 6.55046 6.49886 6.55144C6.41108 6.55104 6.32428 6.56976 6.24447 6.6063C6.16467 6.64284 6.09378 6.69632 6.03673 6.76302C4.92957 8.06012 4.38844 9.20732 4.48205 10.0867C4.51889 10.3647 4.61423 10.6318 4.76179 10.8703C4.90935 11.1088 5.10578 11.3133 5.33813 11.4703C5.6668 11.7398 6.07419 11.8952 6.49886 11.913C7.0363 11.9124 7.55156 11.6987 7.93159 11.3186C8.31162 10.9386 8.52537 10.4233 8.52594 9.88591Z"
                fill= {fillColor} />
            <path
                d="M9.00368 1.57744C8.57835 1.21596 8.13192 0.83717 7.67737 0.423744C7.50501 0.267266 7.30053 0.150349 7.07825 0.0811786C6.85597 0.0120085 6.62126 -0.00774346 6.39055 0.0233055C6.16695 0.0529198 5.95257 0.131272 5.76257 0.252828C5.57257 0.374383 5.41158 0.536177 5.29097 0.726779C4.64615 1.80463 4.19009 2.98466 3.94246 4.21601C3.84558 4.07572 3.75947 3.92829 3.68488 3.77498C3.60829 3.61361 3.49295 3.4737 3.34914 3.36774C3.20533 3.26178 3.03753 3.19307 2.86071 3.16772C2.68389 3.14238 2.50354 3.16119 2.33576 3.22249C2.16798 3.28379 2.01798 3.38566 1.89914 3.51903C0.991827 4.44674 0.488874 5.69605 0.500312 6.99365C0.487764 8.31912 0.91884 9.61071 1.72496 10.663C2.53108 11.7152 3.66593 12.4676 4.94897 12.8005C5.44023 12.9242 5.94459 12.9881 6.45116 12.991C5.80382 12.9669 5.18161 12.7342 4.67732 12.3276C4.32797 12.0817 4.03422 11.7651 3.81515 11.3984C3.59607 11.0316 3.45655 10.6229 3.40566 10.1988C3.2812 9.00287 3.88889 7.61054 5.21196 6.06073C5.37068 5.87467 5.568 5.72539 5.79022 5.62325C6.01243 5.52112 6.25421 5.46857 6.49878 5.46927H6.50419C6.74803 5.46947 6.98891 5.52283 7.21002 5.62563C7.43114 5.72844 7.62719 5.87821 7.78451 6.06452C8.61677 7.05317 9.60975 8.51856 9.60975 9.88546C9.60855 10.6732 9.30857 11.4311 8.77034 12.0063C8.23212 12.5815 7.49574 12.9311 6.70982 12.9845C8.26377 12.9345 9.73719 12.2814 10.818 11.1638C11.8988 10.0461 12.502 8.55164 12.4999 6.99689C12.4972 4.54556 10.8782 3.17108 9.00368 1.57744Z"
                fill= {fillColor}/>
        </svg>

    );
}