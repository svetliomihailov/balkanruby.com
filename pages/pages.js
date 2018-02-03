import Layout from '../documentation/Layout';
import Title from '../documentation/Title';

export default () => (
  <Layout>
    <Title>Pages</Title>

    <div className="container">
      <p>Page compositions:</p>
      <ul>
        <li>
          <a href="/post">Blog Post</a>
        </li>
        <li>
          <a href="/">Page 2</a>
        </li>
        <li>
          <a href="/">Page 3</a>
        </li>
        <li>
          <a href="/">Page 4</a>
        </li>
      </ul>
    </div>
  </Layout>
);
