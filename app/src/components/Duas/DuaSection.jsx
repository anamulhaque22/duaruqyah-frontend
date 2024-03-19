import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const DuaSection = forwardRef((props, ref) => {
  const { subcat_name } = props;
  return (
    <div className="bg-white px-7 py-4 rounded-lg" ref={ref}>
      <p className="text-base font-medium text-primary">
        <span className="text-secondary">Section: </span>
        {subcat_name}
      </p>
    </div>
  );
});

export default DuaSection;
