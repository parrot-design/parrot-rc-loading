import React from 'react';
import { ILoadingProps } from '.';
import classnames from '@parrotjs/classnames';
import './index.scss';

const Loading=React.forwardRef((props:ILoadingProps,ref)=>{

    const SIZE=44;

    const {
        prefixCls:customizedPrefixCls='parrot',
        componentName='loading',
        className,
        size=40,
        style,
        color='primary',
        overlayColor= "rgba(0,0,0,.1)",
        thickness=3.6,
        children,
        loading=true,
        description,
        descriptionWrapperClass,
        ...restProps
    }=props;

    const prefixCls=customizedPrefixCls+'-'+componentName;

    const classes=classnames(prefixCls,className);

    const loadingNode=(
        <div className={classes} {...restProps} style={{width:size,height:size,...style}} ref={ref as any}>
            <svg className={classnames(`${prefixCls}-svg`)} viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`} >
                <circle
                    className={
                        classnames(
                            `${prefixCls}-circle`,
                            `${prefixCls}-indeterminate`,
                            {
                                [`${prefixCls}-${color}`]: color
                            }
                        )
                    }
                    cx={SIZE}
                    cy={SIZE}
                    r={(SIZE-thickness)/2}
                    fill="none"
                    strokeWidth={thickness}
                ></circle>
            </svg>
        </div>
    );

    return children?
        <div className={classnames(`${prefixCls}-container`)}  ref={ref as any}>
            {
                loading && (<div className={classnames(`${prefixCls}-overlay`)} style={{backgroundColor:overlayColor}} >
                    {
                        description?(
                            <div className={classnames(`${prefixCls}-overlay-descriptor-container`,descriptionWrapperClass)}>
                                <div>{loadingNode}</div>
                                <div style={{ lineHeight: "initial"}}>
                                    {description}
                                </div>
                            </div>
                        ):loadingNode
                    }
                </div>)
            }
            {children}
        </div>:
        loadingNode;

});

export default React.memo(Loading);