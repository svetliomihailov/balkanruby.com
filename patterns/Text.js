const Text = ({ text, centered }) => (
  <div className="container">
    <div className="grid">
      <div className={`text ${centered ? 'align-center' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
);

Text.defaultProps = {
  centered: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nostrum necessitatibus nisi deserunt illum similique, nam eius perspiciatis enim aliquam doloremque accusantium dolorem quos omnis quam, quo corporis aperiam tenetur dolorum cumque. Quas cum ducimus consequatur nobis explicabo, earum deleniti reiciendis pariatur perferendis quisquam cumque nihil tempore ad, repellendus ut praesentium molestiae deserunt rem sunt. Eius, nihil atque nobis obcaecati adipisci eligendi, inventore. Cupiditate magnam adipisci inventore eius repellat. Non odit, laudantium fugit, ea aut inventore illum amet aspernatur!',
}

export default Text;
