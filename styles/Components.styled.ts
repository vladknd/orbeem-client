import styled from 'styled-components'
import colors from '../styles/colors'
import devices from './devices';

//------------------------------DIVIDER------------------------------
interface DividerProps {
    mt?: string;
    mb?: string;
    pt?: string;
}
export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: 
        linear-gradient(90deg, rgba(255, 187, 0, 0) 0%, #FFBB00 50.02%, rgba(255, 187, 0, 0) 100%);

    margin-top: ${(props: DividerProps) => props.mt || 0};
    margin-bottom: ${(props: DividerProps) => props.mb || 0};

`

//------------------------------BUTTON------------------------------:
interface IBaseButton {
    width?: number;
    height?: number;

    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
}
export const Button = styled.button`
    /* width: ${(props: IBaseButton) => `${props.width}px` || "100%"};
    height: ${(props: IBaseButton) => `${props.height}px` || "100%"};

    margin-top: ${(props: IBaseButton) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props: IBaseButton) => `${props.mb}px` || "0px"};
    margin-right: ${(props: IBaseButton) => `${props.mr}px` || "0px"};
    margin-left: ${(props: IBaseButton) => `${props.ml}px` || "0px"};

    font-family: Inter;
    font-weight: "300"; */
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    &:hover:active {
        opacity: 0.9;
        cursor: pointer;
    }
`

export const Button1 = styled(Button)`
    color: white;
    background: rgba(0,0,0,0.1);
    z-index: 1;
    border-radius: 15px;
    border: 0.5px solid;
    border-color: #4F2EAE;
    //TO-DO: ADD GRADIENT BORDERS!
   
    font-family: Inter;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 4px;

    &&:hover {
        background: rgba(0,0,0,0.2);
    }

    &&:hover:active {
        opacity: 0.7;
    }

`
export const Button2 = styled(Button)`
    background: transparent;
    color: white;

    border: 0.2px solid white;
    padding: 10px 20px;

    font-family: Inter;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 6px;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    &:hover:active {
        opacity: 0.8;
        cursor: pointer;
    }
`


//------------------------------BOX------------------------------:
interface IBaseDiv {
    width?: string;
    height?: string;

    dir?: string;
    jc?: string;
    al?: string;

    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;

    pt?: string;
    pb?: string;
    pr?: string;
    pl?: string;

   
    clicky?: boolean;


}
export const BaseDiv = styled.div`
    /* display: flex; */

    /* flex-direction: ${(props: IBaseDiv) => props.dir || "column"};
    justify-content: ${(props: IBaseDiv) => props.jc || "center"};
    align-items: ${(props: IBaseDiv) => props.al || "center"};

    width: ${(props: IBaseDiv) => props.width || "100%"};
    height: ${(props: IBaseDiv) => props.height || "100%"};

    margin-top: ${(props: IBaseDiv) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props: IBaseDiv) => `${props.mb}px` || "0px"};
    margin-right: ${(props: IBaseDiv) => `${props.mr}px` || "0px"};
    margin-left: ${(props: IBaseDiv) => `${props.ml}px` || "0px"};

    padding-top: ${(props: IBaseDiv) => props.pt|| "0px"};
    padding-bottom: ${(props: IBaseDiv) => props.pb || "0px"};
    padding-right: ${(props: IBaseDiv) => props.pr || "0px"};
    padding-left: ${(props: IBaseDiv) => props.pl || "0px"};   */
    
    padding: 5px;

    cursor: ${(props: IBox2) => props.clicky ? "pointer" : null};
    &:hover {
        opacity: ${(props: IBox2) => props.clicky ? 0.8 : 1};
    }
    &:hover:active {
        opacity: ${(props: IBox2) => props.clicky ? 0.9 : 1};
    }
    
    
`
export const Box1 = styled(BaseDiv)`
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    background: ${colors.box1_bg};

    color: white;
    filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.6));
`


interface IBox2 {
    clicky?: boolean;
}
export const Box2 = styled(BaseDiv)`
    border: 1px solid ${colors.yellow};
    border-radius: 10px;

    background: ${colors.box2_bg};
    filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.65));


    cursor: ${(props: IBox2) => props.clicky ? "pointer" : null};
    &:hover {
        opacity: ${(props: IBox2) => props.clicky ? 0.8 : 1};
    }
    &:hover:active {
        opacity: ${(props: IBox2) => props.clicky ? 0.9 : 1};
    }
`

//_______________________________TEXT__________________________________
interface TextProps {
    font?: string;
    size?: number;
    bold?: boolean;
    opacity?: number;
    lh?: number;
    m?: string;
    p?: string;
    als?: string;

}

interface IGlowText extends TextProps {
    color?: string;
}
export const GlowText = styled.p`
    font-family: Inter;
    font-weight: 300;

    letter-spacing: 6px;
    color: white;
    text-shadow: 0px 0px 6px rgba(29, 173, 255, 0.25), 0px 0px 33px #B04BFF;
    

`

export const Text = styled.p`
    font-family: ${(props: TextProps) => props.font || "Inter"};
    font-weight: ${(props: TextProps) => props.bold ? "bold" : "300"};
    font-size: ${(props: TextProps) => props.size ? `${props.size}px` : "80px"};
    letter-spacing: 3px;    
    color: white;
    opacity: ${(props: TextProps) => props.opacity || 1};
     
    margin: ${(props: TextProps) => props.m || 0};
    padding: ${(props: TextProps) => props.p || 0};
    line-height: ${(props: TextProps) => props.lh || "35px"}; 
`


export const Waves = styled(BaseDiv)`
    margin-top: 200px;
    position: absolute;
    width: 100%;

    z-index:0;
    background-image: url("/waves.svg");

    background-size: contain;
    opacity: 0.3;

    @media ${devices.laptopXS} {
        height: 330px;
    }
    @media ${devices.laptopS} {
        height: 300px;
    }
    @media ${devices.laptopM} {
        width: 100%;
        height: 450px;
    }
    @media ${devices.laptopL} {
        height: 550px;
    }
`


