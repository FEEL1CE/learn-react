const Header = props => {
  return (
    <nav>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
