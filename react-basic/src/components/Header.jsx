const Header = props => {
  return (
    <nav>
      <ul>
        {props.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
