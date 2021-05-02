import React, { FC } from "react";
import classNames from "classnames";

export interface ImageProps {
  /** 组件类名前缀 */
  prefixCls?: string;
  /** className */
  className?: string;
  /** children */
  children?: React.ReactNode;
  /** 是否有圆角 */
  radius?: boolean;
  /** 图片源地址 */
  src: string;
  /** 图片比例 */
  size?: "3-2" | "16-9" | "1-1" | "3-4";
  /**
   * 设置图片缩放比例
   */
  ratio?: number;
  /**
   * 图片高度
   */
  height?: string | number;
  /**
   * 图片宽度
   */
  width?: string | number;
  /** 是否展示边框 */
  border?: boolean;
  /**
   * 图片缩放
   * cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸
   * contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸
   */
  resize?: "cover" | "contain";
  style?: {}
}

function formatValue(width?: string | number): number | string | undefined {
    let w = width;
    let size = width;
    if (typeof width === 'string') {
      size = Number(width.replace('px', '').trim());
    }
    if (typeof size === 'number' && !isNaN(size)) {
      w = size;
    }
    return w;
  }

export const Image: FC<ImageProps> = (props) => {
  const {
    prefixCls = 'ls-image',
    children,
    className,
    radius = true,
    src,
    size,
    height: originHeight,
    width: originWidth,
    ratio: originRatio,
    border = true,
    resize,
    style = {},
    ...restProps
  } = props;

  const imgStyle: React.CSSProperties = {};
  const sty: React.CSSProperties = { ...style };

  const wrapperClasses = classNames(
    "d-block",
    "position-relative",
    "overflow-hidden",
    {
      "radius-m": radius,
      [`${prefixCls}-border`]: border,
    },
    `${prefixCls}-wrapper`
  );

  let w;
  let h;
  let imgClasses = classNames({});
  const width = formatValue(originWidth);
  const height = formatValue(originHeight);
  let ratio = Number(originRatio);
  if (width && height) {
    w = isNaN(Number(width)) ? width : Math.floor(Number(width));
    h = isNaN(Number(height)) ? height : Math.floor(Number(height));
  } else if (!isNaN(Number(width)) && ratio) {
    w = Math.floor(Number(width));
    h = Math.floor(Number(width) / ratio);
  } else if (!isNaN(Number(height)) && ratio) {
    w = Math.floor(Number(height) * ratio);
    h = Math.floor(Number(height));
  }

  if (w && h) {
    imgStyle.width = w;
    imgStyle.height = h;
    sty.width = w;
    sty.height = h;
  } else if (ratio && !isNaN(ratio)) {
    imgStyle.paddingBottom = `${(1 / ratio) * 100}%`;
  } else {
    const [sizeW, sizeH] = size!.split("-");
    ratio = Number(sizeW) / Number(sizeH);
    imgClasses = classNames(imgClasses, {
      [`${prefixCls}-${size}`]: size,
    });
  }

  return (
    <div
      {...restProps}
      className={classNames(prefixCls, className)}
      style={sty}
    >
      <div className={wrapperClasses}>
        <div className={imgClasses} style={imgStyle}>
          <div className="abs-fill">
            {src && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={src}
                width="100%"
                height="100%"
                className={
                  resize === "contain" ? "object-contain" : "object-cover"
                }
              />
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

Image.defaultProps = {
  prefixCls: "ls-image",
  radius: true,
  size: "1-1",
  border: true,
  resize: "cover",
};

export default Image;
