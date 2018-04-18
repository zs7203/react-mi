import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1226px;
  height: 460px; 
  position: relative;
  background-color:#fff;
`;

const BackSlides = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Slide = styled.li`
  position: absolute; 
  opacity: ${props => props.show ? '1' : '0'};
  transition: all .2s ease;
`;

const SlideLink = styled.a`
    display: block;
    color: #757575;
    text-decoration: none;
`;

const SlideImg = styled.img
    .attrs({
        width: '1226px',
        height: '460px'
    })`
    display: block;
`

//Front

const FrontPanels = styled.div`
    width: 1226px;
    height: 460px; 
    position: absolute;
    top: 0;
    display: flex;
    z-index: 11;
`

const Arrows = styled.div`
  flex: auto 1 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Arrow = styled.span`
    display: inline-block;
    width: 41px;
    height: 69px;
    padding: 12px 0;
    color: #757575;
    font-size: 32px;
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    opacity: 1;
    transition: all .5s ease;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color:rgba(0,0,0,.5);
  }
`;

const Pagers = styled.ul`
    position: absolute;
    bottom: 15px;
    right: 30px;
    padding: 0;
    list-style-type: none;
    display: inline-flex;
    justify-content: center;
`;

const Pager = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PagerDot = styled.span`
    display: block;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    box-sizing: content-box;
    background-color: ${props => props.active ? 'rgba(255,255,255,0.4)' : 'rgba(0, 0, 0, 0.4)'};
    border-width:2px;
    border-style: solid;
    border-color: ${props => props.active ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.298039)'};
    border-radius: 6px;
    transition: all .2s ease;
    &:hover{
      background: rgba(255,255,255,0.4);
      border-color: rgba(0, 0, 0, 0.4);
    }
`;

export default class extends Component {

    state = {
        slidesIndex: 0
    };

    handleLeft = evt => {
        this.setState({
            slidesIndex: this.state.slidesIndex - 1 < 0 ? this.props.slides.length - 1 : --this.state.slidesIndex
        })
        ;
    };

    handleRight = evt => {
        this.setState({
            slidesIndex: this.state.slidesIndex + 1 >= this.props.slides.length ? 0 : ++this.state.slidesIndex
        })
    };

    handleClick = evt => {
        this.setState({slidesIndex: parseInt(evt.currentTarget.dataset.index)});
    };

    generatePager = () => {
        return new Array(this.props.slides.length).fill(0).map((v, i) => {
                let active = this.state.slidesIndex === i;
                return (
                    <Pager key={i} onClick={this.handleClick} data-index={i} active={active}>
                        <PagerDot active={active}/>
                    </Pager>
                );
            }
        );
    };

    render() {
        const {
            handleLeft,
            handleRight,
            generatePager,
            state: {
                slidesIndex
            },
            props: {
                slides,
                categories,
                Slot,
            }
        } = this;

        return (
            <Container>
                {/* 前面 z-index=11 */}
                <FrontPanels>
                    {Slot ? <Slot categories={categories}/> : null}
                    <Arrows>
                        <Arrow onClick={handleLeft} className="iconfont icon-back"/>
                        <Arrow onClick={handleRight} className="iconfont icon-more"/>
                    </Arrows>
                    <Pagers>
                        {generatePager()}
                    </Pagers>
                </FrontPanels>

                {/*后面的轮播图*/}
                <BackSlides>
                    {
                        slides && slides.map((slide, index) =>
                            <Slide key={index} show={slidesIndex === index}>
                                <SlideLink>
                                    <SlideImg src={slide.src}/>
                                </SlideLink>
                            </Slide>
                        )
                    }
                </BackSlides>
            </Container>
        );
    }
}