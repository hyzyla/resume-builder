import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  InputHTMLAttributes,
  ForwardedRef,
  CSSProperties,
} from "react";

const SPAN_STYLE: CSSProperties = {
  opacity: 0,
  position: "absolute",
  zIndex: -999,
  whiteSpace: "pre",
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function AutoresizableInput(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const [content, setContent] = useState(props.value ?? props.defaultValue);
  const [width, setWidth] = useState(0);
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setWidth(span.current?.offsetWidth ?? 0);
  }, [content]);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setContent(evt.target.value);
    props.onChange?.(evt);
  };

  return (
    <div className="relative">
      <span ref={span} style={SPAN_STYLE}>
        {content}
      </span>
      <input
        ref={ref}
        style={{ ...props.style, width: width + 10 }}
        {...props}
        onChange={changeHandler}
      />
    </div>
  );
}

export default React.forwardRef<HTMLInputElement, Props>(AutoresizableInput);
