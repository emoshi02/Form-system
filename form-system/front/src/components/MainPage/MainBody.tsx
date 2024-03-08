import "./MainPage.scss";

export const MainBody = () => {
  return (
    <main className="main-body">
      <span className="sub-header">
        <section className="sub-header-item">
          <span className="main-page-sub-title">
            <p>Naujausios formos</p>
          </span>
        </section>
        <section className="sub-header-item">
          <span className="main-page-sub-title">
            <p>Man priskirtos formos</p>
          </span>
        </section>
      </span>
      <section className="create-form">
        <button className="create-form-btn">
          <img
            alt="create form"
            className="create-form-img"
            src="../../assets/images/sign.png"
          />
        </button>
      </section>
    </main>
  );
};
