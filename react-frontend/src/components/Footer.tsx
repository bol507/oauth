interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <div className="bg-gray-600 text-gray-50 h-full flex justify-center items-center">
      <a
        href="https://github.com/bol507"
        className="mt-1 hover:text-green-700 mr-4"
      >
        bol507
      </a>
    </div>
  );
};

export default Footer;
