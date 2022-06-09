import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { projectsData } from '../../lib/projectsData';
export default function ProjectContent({}) {
  const location = useLocation();
  const [project, setProject] = useState();
  useEffect(() => {
    const path = location.pathname.split('/')[2];
    setProject(projectsData[path]);
  }, []);
  return (
    <div>
      {project && (
        <>
          <Container>
            <div className="top">
              <div className="right">
                <h1>{project.title}</h1>
                {project?.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="left">
                <div>
                  <h3>Deliverables</h3>
                  {project?.deliverables.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
                <div className="icon-container">
                  <i className="icon-code" />
                  <i className="icon-window" />
                </div>
              </div>
            </div>
          </Container>
          <Preview>
            <Logo>
              <img src={project.logo} alt="logo" />
            </Logo>
            <img src={project.preview} alt="" className="preview" />
          </Preview>
        </>
      )}
    </div>
  );
}

const Container = styled.section`
  position: relative;
  padding: 8rem 0;
  max-width: 1000px;
  margin: 0 auto;
  h3 {
    font-weight: 600;
    font-family: 'Poppins';
    font-size: 01rem;
    line-height: 2;
    color: var(--almond);
  }

  .top {
    .left {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      p {
        font-size: 0.85rem;
        font-weight: 400;
        max-width: 20ch;
      }
      .icon-container {
        margin-left: 4rem;
        display: flex;
        i {
          color: var(--almond);
          margin-right: 1rem;
          cursor: pointer;
          transition: var(--hover-transition);
          border-radius: 100px;
          box-sizing: border-box;
          display: inline-block;
          border: 3px solid transparent;
          padding: 0.3rem;
          font-size: 2rem;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .right {
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        max-width: 80ch;
        line-height: 1.8;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  img {
    height: 6rem;
  }
`;

const Preview = styled.section`
  background: var(--black);
  .preview {
    display: block;
    margin: 0 auto;
    max-width: 1000px;
    width: 1000px;
    border-radius: 10px;
  }
  padding-bottom: 3rem;
`;
