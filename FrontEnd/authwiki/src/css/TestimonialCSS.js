import styled from "styled-components";

export const TestimonialCSS = styled.main`
  :root {
    --color1: #491da8;
    --color2: #e4c269;
    --color3: #052a4f;
    --color4: #426a75;
    --color5: #1f2c89;
    --color6: #05213e;
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
    font-size: 1.3rem;
    line-height: 22px;
  }

  .testimonial_head > h1 {
    color: #fff;
    font-weight: 400;
  }

  .testimonial_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .testimonial_box {
    background-color: rgba(5, 42, 79, 0.27);
    border-radius: 4px;
    border: 2px solid var(--color4);
    padding: 40px;
    color: #a9a9a5;
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
    color: #fff;
  }

  .testimonial_content {
    margin-top: 20px;
  }
  @media (max-width: 885px) {
    .nav ul.login {
      display: none;
    }
    .testimonial_container {
      grid-template-columns: 1fr;
    }
  }
`;
