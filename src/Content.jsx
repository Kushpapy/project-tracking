import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
`;

const NewBox = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;
const New = styled.div`
  background-color: var(--color-very-dark-blue);
  color: var(--light-grayish-blue);
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
`;

const H1 = styled.h1`
  font-size: 7.4rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Button = styled.button`
  border: none;
  background-color: var(--color-red);
  padding: 1rem 2rem;
  font-size: inherit;
  font-family: inherit;
  display: inline-block;
  border-radius: 5px;
  color: var(--light-grayish-blue);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.3s all ease-in;
`;

const ThinParagraph = styled.p`
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  color: var(--color-grayish-blue);
  font-weight: 300;
`;

const FinalBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const SvgBox = styled.div`
  margin-left: auto;
`;

const ContentBox = styled.div`
  display: grid;

  & #special {
    font-size: 2rem;
    color: var(--dark-Grayish-Blue);
  }
`;

function Content() {
  return (
    <StyledContent>
      <ContentBox>
        <NewBox>
          <New>
            <p>New</p>
          </New>
          <ThinParagraph>Monograph Dashboard</ThinParagraph>
        </NewBox>
        <H1>
          Powerful insights <br></br> into your team
        </H1>
        <p id="special">
          Project planning and time tracking <br /> for agile teams
        </p>
        <FinalBox>
          <Button> Schedule a demo</Button>
          <ThinParagraph>to see a live preview</ThinParagraph>
        </FinalBox>
      </ContentBox>
      <SvgBox>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="960"
          height="464"
        >
          <defs>
            <rect id="a" width="597.554" height="396.861" x="0" y="0" rx="3" />
            <rect id="c" width="331" height="184" x="0" y="0" rx="5" />
            <rect id="h" width="167" height="341" x="0" y="0" rx="12" />
            <rect id="i" width="155" height="330" x="0" y="0" rx="9" />
            <rect id="k" width="140" height="184" x="0" y="0" rx="5" />
            <filter
              id="g"
              width="213.8%"
              height="155.7%"
              x="-53.3%"
              y="-16.1%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                dx="6"
                dy="40"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              />
              <feGaussianBlur
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
                stdDeviation="25"
              />
              <feColorMatrix
                in="shadowBlurOuter1"
                values="0 0 0 0 0.243459558 0 0 0 0 0.279312558 0 0 0 0 0.375398597 0 0 0 0.255293252 0"
              />
            </filter>
            <path id="e" d="M3 0h769.629a3 3 0 013 3v16.006H0V3a3 3 0 013-3z" />
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(184 9)">
              <rect
                width="635"
                height="434"
                x="81"
                fill="#191D36"
                fillRule="nonzero"
                rx="12"
              />
              <rect
                width="629"
                height="428"
                x="84"
                y="3"
                fill="#0B0E21"
                fillRule="nonzero"
                rx="10"
              />
              <rect
                width="603"
                height="402"
                x="97"
                y="16"
                fill="#16171B"
                fillRule="nonzero"
                rx="5"
              />
              <g transform="translate(100 18)">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <use fill="#EBEDF4" fillRule="nonzero" xlinkHref="#a" />
                <g mask="url(#b)">
                  <g transform="translate(129 14)">
                    <g transform="translate(0 75)">
                      <rect width="331" height="47" fill="#FFF" rx="5" />
                      <g transform="translate(16 18)">
                        <rect width="53" height="5" fill="#B1B4C7" rx="2.5" />
                        <rect
                          width="34"
                          height="5"
                          y="9"
                          fill="#D4D7E6"
                          rx="2.5"
                        />
                        <g transform="translate(75)">
                          <rect width="53" height="5" fill="#B1B4C7" rx="2.5" />
                          <rect
                            width="34"
                            height="5"
                            y="9"
                            fill="#D4D7E6"
                            rx="2.5"
                          />
                        </g>
                        <g transform="translate(177)">
                          <rect width="53" height="5" fill="#B1B4C7" rx="2.5" />
                          <rect
                            width="34"
                            height="5"
                            y="9"
                            fill="#D4D7E6"
                            rx="2.5"
                          />
                        </g>
                        <g transform="translate(250)">
                          <rect width="53" height="5" fill="#B1B4C7" rx="2.5" />
                          <rect
                            width="34"
                            height="5"
                            y="9"
                            fill="#D4D7E6"
                            rx="2.5"
                          />
                        </g>
                      </g>
                    </g>
                    <g transform="translate(0 136)">
                      <mask id="d" fill="#fff">
                        <use xlinkHref="#c" />
                      </mask>
                      <use fill="#FFF" xlinkHref="#c" />
                      <g mask="url(#d)">
                        <g transform="translate(-33 32)">
                          <rect
                            width="184"
                            height="24"
                            x="17"
                            fill="#FF5E5E"
                            rx="12"
                          />
                          <rect
                            width="184"
                            height="24"
                            x="17"
                            y="96"
                            fill="#FF5E5E"
                            rx="12"
                          />
                          <rect
                            width="24"
                            height="24"
                            x="209"
                            fill="#BC4747"
                            rx="12"
                          />
                          <rect
                            width="88"
                            height="24"
                            x="209"
                            y="32"
                            fill="#FF5E5E"
                            rx="12"
                          />
                          <rect
                            width="114"
                            height="24"
                            x="87"
                            y="31.547"
                            fill="#BC4747"
                            rx="12"
                          />
                          <rect
                            width="50"
                            height="24"
                            x="247"
                            y="64.53"
                            fill="#FF5E5E"
                            rx="12"
                          />
                          <rect
                            width="79"
                            height="24"
                            y="63.925"
                            fill="#FF5E5E"
                            rx="12"
                          />
                          <rect
                            width="24"
                            height="24"
                            x="305"
                            y="32"
                            fill="#BC4747"
                            rx="12"
                          />
                        </g>
                      </g>
                    </g>
                    <rect width="77" height="5" fill="#CBCEDC" rx="2.5" />
                    <g transform="translate(0 26)" fill="#8C90A3">
                      <rect width="66" height="19" rx="9.5" />
                      <rect width="31" height="19" x="76" y=".288" rx="9.5" />
                      <rect width="31" height="19" x="115" rx="9.5" />
                    </g>
                  </g>
                </g>
                <g mask="url(#b)">
                  <path fill="#353740" d="M0 0h107v397H0z" />
                  <g transform="translate(15 12)">
                    <rect
                      width="77"
                      height="5"
                      y="68"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <rect
                      width="77"
                      height="5"
                      y="87"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <rect
                      width="77"
                      height="5"
                      y="106"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <rect
                      width="77"
                      height="5"
                      y="125"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <rect
                      width="77"
                      height="5"
                      y="144"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <rect
                      width="77"
                      height="5"
                      y="366"
                      fill="#4A4E5D"
                      rx="2.5"
                    />
                    <g transform="translate(0 25)">
                      <g transform="translate(24 2)">
                        <rect width="53" height="5" fill="#7B7F90" rx="2.5" />
                        <rect
                          width="34"
                          height="5"
                          y="9"
                          fill="#4A4E5D"
                          rx="2.5"
                        />
                      </g>
                      <circle cx="9" cy="9" r="9" fill="#FF5E5E" />
                    </g>
                    <rect width="77" height="9" fill="#8C90A3" rx="4.5" />
                  </g>
                </g>
              </g>
              <g
                fill="#4A5166"
                fillRule="nonzero"
                opacity=".098"
                transform="translate(387 8)"
              >
                <rect width="15.64" height="4" rx="2" />
                <rect width="3.68" height="4" x="19.32" rx="1.84" />
              </g>
              <g transform="translate(0 430)">
                <mask id="f" fill="#fff">
                  <use xlinkHref="#e" />
                </mask>
                <use fill="#242942" fillRule="nonzero" xlinkHref="#e" />
                <rect
                  width="126.689"
                  height="57.968"
                  x="324.47"
                  y="-46.564"
                  fill="#2E334F"
                  fillRule="nonzero"
                  mask="url(#f)"
                  rx="10"
                />
              </g>
              <path
                fill="#1A1C27"
                fillRule="nonzero"
                d="M0 448h776a7 7 0 01-7 7H7a7 7 0 01-7-7z"
              />
            </g>
            <g fillRule="nonzero" transform="translate(44 9.21)">
              <use fill="#000" filter="url(#g)" xlinkHref="#h" />
              <use fill="#242942" xlinkHref="#h" />
            </g>
            <g transform="translate(50 15)">
              <mask id="j" fill="#fff">
                <use xlinkHref="#i" />
              </mask>
              <use fill="#EBEDF4" fillRule="nonzero" xlinkHref="#i" />
              <g mask="url(#j)">
                <path fill="#353740" d="M0 0h155v77H0z" />
                <g transform="translate(8 108)">
                  <mask id="l" fill="#fff">
                    <use xlinkHref="#k" />
                  </mask>
                  <use fill="#FFF" xlinkHref="#k" />
                  <g mask="url(#l)">
                    <g transform="matrix(-1 0 0 1 293 32)">
                      <rect
                        width="184"
                        height="24"
                        x="17"
                        fill="#FF5E5E"
                        rx="12"
                      />
                      <rect
                        width="184"
                        height="24"
                        x="17"
                        y="96"
                        fill="#FF5E5E"
                        rx="12"
                      />
                      <rect
                        width="24"
                        height="24"
                        x="209"
                        fill="#BC4747"
                        rx="12"
                      />
                      <rect
                        width="88"
                        height="24"
                        x="209"
                        y="32"
                        fill="#FF5E5E"
                        rx="12"
                      />
                      <rect
                        width="114"
                        height="24"
                        x="87"
                        y="31.547"
                        fill="#BC4747"
                        rx="12"
                      />
                      <rect
                        width="50"
                        height="24"
                        x="247"
                        y="64.53"
                        fill="#FF5E5E"
                        rx="12"
                      />
                      <rect
                        width="79"
                        height="24"
                        y="63.925"
                        fill="#FF5E5E"
                        rx="12"
                      />
                      <rect
                        width="24"
                        height="24"
                        x="305"
                        y="32"
                        fill="#BC4747"
                        rx="12"
                      />
                    </g>
                  </g>
                </g>
                <rect width="140" height="47" x="8" y="52" fill="#FFF" rx="5" />
                <rect
                  width="77"
                  height="5"
                  x="37"
                  y="21"
                  fill="#4A4E5D"
                  rx="2.5"
                />
              </g>
            </g>
            <g transform="translate(74 85)">
              <rect width="102" height="5" fill="#B1B4C7" rx="2.5" />
              <rect width="65" height="5" y="9" fill="#D4D7E6" rx="2.5" />
            </g>
          </g>
        </svg>
      </SvgBox>
    </StyledContent>
  );
}

export default Content;
