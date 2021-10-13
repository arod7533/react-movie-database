import react from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "../BreadCrumb/BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span> | </span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>

);

export default BreadCrumb;

