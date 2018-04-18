import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 296px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  width: 296px;
  height: 50px;
  transition: all .2s;
`;

const SearchInput = styled.input.attrs({
    type: 'text'
})`
    z-index: 1;
    flex-grow: 1;
    padding: 0 10px;
    border: 1px solid ${props => props.focused ? '#ff6700': '#e0e0e0'};
    border-right: 0;
    font-size: 14px;
    line-height: 48px;
    outline: 0;
    transition: inherit;
`;

const SearchBtn = styled.div`
    z-index: 2;
    width: 52px;
    border: 1px solid ${props => props.focused ? '#ff6700': '#e0e0e0'};
    font-size: 24px;  
    font-weight: bolder;
    line-height: 50px;
    text-align: center;
    background: #fff;
    color: #616161;
    outline: 0;
    -webkit-transition: all .2s;
    transition: inherit;
    &:hover{
      color: #fff;
      background-color:#ff6700;
    }
`;

const SearchHotWords = styled.div`
    position: absolute;
    top: 14px;
    right: 62px;
    z-index: 2;
    text-align: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: ${props => props.focused ? 0: 1};
    transition:inherit;
`;

const HotWord = styled.a`
    display: inline-block;
    margin-left: 5px;
    padding: 0 5px;
    font-size: 12px;
    background: #eee;
    color: #757575 !important;
    cursor: pointer;
    -webkit-transition: all .2s;
    transition: inherit;
    &:hover{
        color: #fff !important;
        background: #ff6700;
    }
`

const ProductList = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  width: 245px;
  border: 1px solid #ff6700;
  border-top: 0;
  display: flex;
  padding: 0;
  flex-direction: column; 
  justify-content: start;
  align-items: stretch;
  list-style: none;
  background-color:#fff;
  opacity: ${props => props.focused ? 1: 0};
  transition: inherit;
`;

const ProductItemWrapper = styled.li`
    font-size: 12px;
    color: #424242;
    &:hover{
    background-color:rgba(202,202,202,0.16);
    }
`;

const ProductItem = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProductItemName = styled.span`
  padding: 6px 15px;
  font-size: 12px;
`;

const ProductItemStock = styled.span`
  padding: 6px 15px;
  font-size: 12px;
  color: #b0b0b0;
`;

export default class extends Component {

    state = {
        focused: false
    };

    handleFocus = () => {
        this.setState({focused: true});
    };

    handleBlur = () => {
        this.setState({focused: false});
    };

    render() {
        return (
            <Wrapper>
                <Form>
                    <SearchInput focused={this.state.focused} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                    <SearchBtn className="iconfont icon-search" focused={this.state.focused}/>
                    <SearchHotWords  focused={this.state.focused}>
                        <HotWord>小米Note 3</HotWord>
                        <HotWord>小米Note 3</HotWord>
                    </SearchHotWords>
                    <ProductList focused={this.state.focused}>
                        <ProductItemWrapper>
                            <ProductItem>
                                <ProductItemName>小米6</ProductItemName>
                                <ProductItemStock>约25件</ProductItemStock>
                            </ProductItem>
                        </ProductItemWrapper>
                        <ProductItemWrapper>
                            <ProductItem>
                                <ProductItemName>小米6</ProductItemName>
                                <ProductItemStock>约25件</ProductItemStock>
                            </ProductItem>
                        </ProductItemWrapper>
                        <ProductItemWrapper>
                            <ProductItem>
                                <ProductItemName>小米6</ProductItemName>
                                <ProductItemStock>约25件</ProductItemStock>
                            </ProductItem>
                        </ProductItemWrapper>
                        <ProductItemWrapper>
                            <ProductItem>
                                <ProductItemName>小米6</ProductItemName>
                                <ProductItemStock>约25件</ProductItemStock>
                            </ProductItem>
                        </ProductItemWrapper>
                        <ProductItemWrapper>
                            <ProductItem>
                                <ProductItemName>小米6</ProductItemName>
                                <ProductItemStock>约25件</ProductItemStock>
                            </ProductItem>
                        </ProductItemWrapper>
                    </ProductList>
                </Form>
            </Wrapper>
        );
    }
}
