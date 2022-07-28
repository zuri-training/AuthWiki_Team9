import styled from "styled-components";

export const GettingStartedCSS = styled.main`
:root {
    --color1: #491DA8;
    --color2: #E4C269;
    --color3: #052A4F;
    --color4: #426A75;
    --color5: #1F2C89;
    --color6: #05213E;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
}

.testimonial_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--color3);
    min-height: 40vh;
    padding: 30px 100px;
}

.testimonial_head>h1 {
    color: #fff;
    font-weight: 400;
}

.testimonial_container {
    display: flex;
    gap: 1.5rem;
}

.testimonial_box {
    background-color: rgba(5, 42, 79, 0.27);
    border-radius: 4px;
    border: 2px solid var(--color4);
    color: #fff;
    padding: 40px;
    width: 30%;
}

.testimonial_title {
    display: flex;
    align-items: center;
}

.testimonial_image {
    border-radius: 100%;
    width: 45px;
    height: 45px;
}

.testimonial_name {
    margin-left: 30px;
    margin-right: 30px;
    display: block;
}

.testimonial_content {
    margin-top: 20px;
}
`;