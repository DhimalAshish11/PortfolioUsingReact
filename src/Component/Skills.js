import Layout from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <div id="skills" class="container py-3 mb-5">
        <div class="row">
          <div class="col">
            <div class="title">
              <span>Skills</span>
            </div>

            <div class="icons">
              <div>
                <i class="fa-brands fa-html5 text-danger"></i> HTML
              </div>
              <div>
                <i class="fa-brands fa-css3-alt text-primary"></i> CSS
              </div>
              <div>
                <i class="fa-brands fa-square-js text-warning"></i> JavaScript
              </div>
              <div>
                <i class="fa-brands fa-figma text-info"></i> Figma
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
