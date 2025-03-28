import { ArraySocial } from "./types";

export const arraySocial: ArraySocial[] = [
  {
    id: 1,
    name: "Facebook",
    width: "11.564px",
    height: "18.678px",
    widthMobile: "8.392px",
    heightMobile: "13.554px",
    padding: "11.207px 22.413px",
    paddingMobile: "8.132px 16.264px",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="19"
        viewBox="0 0 13 19"
        fill="none"
      >
        <path
          d="M10.1684 4.49785H11.9473C12.1922 4.49785 12.392 4.29808 12.392 4.05315V0.495488C12.392 0.250544 12.1922 0.0507812 11.9473 0.0507812H9.27903C6.5821 0.0507812 4.38725 2.24566 4.38725 4.94256V7.20167H1.2743C1.02935 7.20167 0.82959 7.40144 0.82959 7.64638V11.1685C0.82959 11.4134 1.02936 11.6132 1.2743 11.6132H4.07795V18.2838C4.07795 18.5287 4.27772 18.7285 4.52266 18.7285H8.23574C8.48069 18.7285 8.68045 18.5287 8.68045 18.2838V11.6132H11.0196C11.222 11.6132 11.4 11.4777 11.4513 11.2796L12.3789 7.72198C12.4145 7.58822 12.3859 7.44664 12.3008 7.3372C12.2165 7.22863 12.0871 7.16348 11.9499 7.16348H8.83691V5.82936C8.83691 5.09368 9.43535 4.49524 10.171 4.49524L10.1684 4.49785ZM8.38961 8.05551H11.3714L10.6757 10.7238H8.23421C7.98926 10.7238 7.7895 10.9235 7.7895 11.1685V17.8391H4.96583V11.1685C4.96583 10.9235 4.76606 10.7238 4.52113 10.7238H1.71747V8.09109H4.83042C5.07536 8.09109 5.27513 7.89132 5.27513 7.64638V4.94256C5.27513 2.73639 7.06959 0.940196 9.27749 0.940196H11.501V3.60844H10.1669C8.94136 3.60844 7.94337 4.60643 7.94337 5.83197V7.6108C7.94337 7.85575 8.14314 8.05551 8.38808 8.05551H8.38961Z"
          fill="black"
        />
      </svg>
    ),
    link: "https://www.facebook.com/profile.php?id=100081749037406#",
  },
  {
    id: 2,
    name: "X",
    width: "18.273px",
    height: "18.678px",
    widthMobile: "13.26px",
    heightMobile: "13.554px",
    padding: "11.207px 22.413px",
    paddingMobile: "8.132px 16.264px",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M9.36573 10.5258L8.64272 9.49292L2.89309 1.2644H5.37197L10.0113 7.90058L10.7343 8.93345L16.768 17.5665H14.2891L9.36573 10.5258ZM11.5692 7.96083L18.3689 0.0507812H16.7593L10.8548 6.91936L6.13802 0.0507812H0.698242L7.83364 10.4311L0.698242 18.7285H2.3078L8.54804 11.4726L13.5316 18.7285H18.9714L11.5692 7.96083Z"
            fill="#202020"
          />
        </svg>
      </>
    ),
    link: "https://x.com/calm_essimple",
  },
  {
    id: 3,
    name: "Whatsapp",
    width: "17.941px",
    height: "18.678px",
    widthMobile: "13.019px",
    heightMobile: "13.554px",
    padding: "11.207px 22.413px",
    paddingMobile: "8.132px 16.264px",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M12.3846 9.22137C11.853 8.77441 11.0532 8.83582 10.6031 9.36542L10.2313 9.80181C10.2176 9.81558 10.1985 9.82087 10.1794 9.81558C9.68904 9.65034 8.77496 9.18643 8.17336 7.93342C8.16807 7.91965 8.17018 7.90376 8.18183 7.88999L8.64575 7.35298C9.09271 6.83503 9.04401 6.04067 8.53453 5.58522L7.49866 4.64996C7.24657 4.42224 6.91612 4.30574 6.5793 4.32692C6.24036 4.34598 5.92897 4.49745 5.70123 4.7527L5.07737 5.45813C4.79776 5.77272 4.63041 6.17944 4.59968 6.59991C4.53719 7.50021 4.65688 9.7965 7.08876 11.7051C7.2953 11.8894 9.04931 13.3998 11.0172 13.3998C11.4027 13.3998 11.7978 13.3426 12.1886 13.2049C12.5032 13.0937 12.7881 12.9009 13.0074 12.6467L13.6175 11.9392C13.8399 11.6818 13.9479 11.3503 13.9214 11.0113C13.8939 10.6724 13.7371 10.3631 13.4766 10.1439L12.3846 9.22137ZM12.7967 11.2338L12.1866 11.9414C12.0912 12.0526 11.9673 12.1362 11.8317 12.185C9.97394 12.8353 7.82388 10.9108 7.80273 10.8938L7.77201 10.8652C5.80935 9.33047 5.6187 7.58378 5.6812 6.67624C5.69497 6.49194 5.76806 6.31613 5.88986 6.18055L6.51372 5.47513C6.55715 5.42641 6.61117 5.41581 6.64082 5.41264H6.65142C6.68107 5.41264 6.72979 5.42111 6.77322 5.45924L7.8091 6.39449C7.88218 6.4591 7.88748 6.57349 7.82498 6.64975L7.36107 7.18677C7.06875 7.52888 7.00096 8.00868 7.19584 8.41011C7.96905 10.0211 9.18074 10.628 9.83426 10.8505C10.2738 10.9998 10.7557 10.8664 11.0576 10.5147L11.4294 10.0783C11.494 10.002 11.6084 9.99464 11.6846 10.0571L12.7777 10.9818C12.8296 11.0252 12.8402 11.0792 12.8423 11.1068C12.8423 11.128 12.8401 11.1819 12.7967 11.2338Z"
            fill="black"
          />
          <path
            d="M9.20596 0.0510797C6.84929 0.0510797 4.63464 0.97044 2.96626 2.63546C0.0429882 5.55873 -0.450776 10.1249 1.74925 13.5926L0.0874023 18.7285L4.98925 16.6271C8.41143 18.4923 12.6736 17.8875 15.4475 15.1146C18.8887 11.6734 18.8887 6.07769 15.4475 2.63625C13.7804 0.968055 11.5646 0.0507812 9.20563 0.0507812L9.20596 0.0510797ZM14.6807 14.3469C12.1917 16.836 8.32987 17.335 5.29842 15.5565L5.0601 15.4146L1.85511 16.7894L2.94288 13.4277L2.79354 13.2084C0.719673 10.1474 1.11474 6.02293 3.7341 3.40362C5.19576 1.94196 7.13947 1.13697 9.20591 1.13697C11.2724 1.13697 13.2159 1.94196 14.6777 3.40362C17.6964 6.418 17.6963 11.3293 14.6807 14.3469Z"
            fill="black"
          />
        </svg>
      </>
    ),
    link: "https://api.whatsapp.com/message/XBAEHPNQMBD4A1?autoload=1&app_absent=0",
  },
  {
    id: 4,
    name: "Menssenger",
    width: "18.678px",
    height: "18.678px",
    widthMobile: "13.554px",
    heightMobile: "13.554px",
    padding: "11.207px 22.413px",
    paddingMobile: "8.132px 16.264px",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M10.281 0.0508868C8.02957 0.0501087 5.8528 0.864136 4.15398 2.34121C2.45433 3.81831 1.34606 5.86038 1.03247 8.08994C0.719626 10.3203 1.22314 12.5881 2.45042 14.4762L1.58346 17.9549C1.53676 18.1409 1.57879 18.3378 1.69708 18.4888C1.81459 18.6398 1.99592 18.7285 2.18736 18.7285C2.23795 18.7285 2.28931 18.7223 2.33834 18.7098L6.13842 17.758C8.69332 19.0227 11.6865 19.0515 14.2647 17.8351C16.8429 16.6195 18.7249 14.2918 19.3745 11.5166C20.0236 8.74051 19.3691 5.81983 17.5978 3.58628C15.8266 1.35274 13.1315 0.0507812 10.2808 0.0507812L10.281 0.0508868ZM10.281 17.4833C8.96504 17.4896 7.66856 17.1674 6.50806 16.5479C6.41779 16.4997 6.31739 16.4748 6.21543 16.4748C6.16407 16.4748 6.11348 16.481 6.06446 16.4934L3.04177 17.2499L3.72506 14.5089C3.76864 14.3346 3.7344 14.1501 3.63245 14.0023C2.24642 12.0046 1.83318 9.49015 2.50478 7.1538C3.17718 4.81685 4.86444 2.90626 7.09938 1.95056C9.33452 0.994105 11.8817 1.09372 14.0349 2.22139C16.189 3.34906 17.7222 5.38493 18.2101 7.7671C18.6973 10.1485 18.0887 12.6241 16.5517 14.5074C15.0147 16.3907 12.712 17.4835 10.2806 17.4835L10.281 17.4833ZM15.4369 7.75544C15.5396 7.88462 15.5878 8.04884 15.5692 8.21304C15.5513 8.37725 15.468 8.52745 15.3396 8.63097L12.2267 11.1213C11.9986 11.3026 11.6764 11.3026 11.4484 11.1213L8.72459 8.94156L6.00074 11.1213C5.73146 11.3345 5.34079 11.291 5.12678 11.0225C4.912 10.7548 4.95557 10.3633 5.22251 10.1485L8.33545 7.65818C8.56346 7.47685 8.88565 7.47685 9.11367 7.65818L11.8375 9.83793L14.5614 7.65818C14.6906 7.55467 14.8555 7.5072 15.019 7.52588C15.1832 7.54378 15.3333 7.62626 15.4369 7.75544Z"
            fill="black"
          />
        </svg>
      </>
    ),
    link: "https://www.facebook.com/messages/t/103322771084627",
  },
  {
    id: 5,
    name: "Email",
    width: "18.678px",
    height: "14.125px",
    widthMobile: "13.554px",
    heightMobile: "10.25px",
    padding: "11.207px 22.413px",
    paddingMobile: "8.132px 16.264px",
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
        >
          <path
            d="M16.8944 14.4518H2.11336C1.03814 14.4502 0.16661 13.5787 0.165039 12.5035V2.27498C0.166612 1.19976 1.03812 0.328231 2.11336 0.32666H16.8944C17.9696 0.328233 18.8412 1.19974 18.8427 2.27498V12.5035C18.8412 13.5787 17.9697 14.4502 16.8944 14.4518ZM2.23136 13.1933H16.7764L12.2891 8.31817C11.7023 8.95608 11.2217 9.47678 10.9394 9.78353H10.9402C10.561 10.1658 10.045 10.3805 9.50625 10.3813C8.96823 10.3821 8.45146 10.1682 8.07156 9.78669C7.78367 9.47442 7.30308 8.95215 6.71866 8.31738L2.23136 13.1933ZM13.1449 7.38929L17.5835 12.2117L17.5843 2.56692C16.4626 3.78531 14.6394 5.76673 13.1449 7.38929ZM1.4235 2.56692V12.2117L5.86289 7.38929C4.3692 5.7674 2.54991 3.79078 1.4235 2.56692ZM2.2313 1.58528C4.03804 3.54776 7.90402 7.74792 8.99338 8.9303C9.12867 9.06717 9.3135 9.14425 9.50623 9.14347C9.69893 9.14268 9.88299 9.06481 10.0183 8.92716C11.0841 7.77091 14.9784 3.54077 16.7771 1.58536L2.2313 1.58528Z"
            fill="black"
          />
        </svg>
      </>
    ),
    link: "mailto:hola@calmessimple.com.ar",
  },
];
