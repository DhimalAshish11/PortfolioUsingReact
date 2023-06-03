export const MenuItem = ({ href, label }) => {
  return (
    <>
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href={href}>
          {label}
        </a>
      </li>
    </>
  );
};
