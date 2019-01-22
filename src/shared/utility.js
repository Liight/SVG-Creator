// import React from 'react';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const convertSvgToXml = (svgElement, type) => {

    console.log('inside convertSvgToXml')
    console.log(svgElement);

    let doc = "";

    if(type === "xml"){
        let xmlVersion = '<?xml version="1.0" encoding="UTF-8"?>';
        let docType = '<!DOCTYPE svg>';
        let svgBegin = '<svg width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">';
        let svgEnd = '</svg>';
        let shapeBegin = '<polyline>';
        let shapeEnd = '</polyline>';
        let points = '<points>'+svgElement.props.points+'</points>';
        let fill = '<fill>'+svgElement.props.fill+'</fill>';
        let stroke = '<stroke>'+svgElement.props.stroke+'</stroke>';
        let strokeWidth = '<strokeWidth>'+svgElement.props.strokeWidth+'</strokeWidth>';

        doc = xmlVersion+docType+svgBegin+shapeBegin+points+fill+stroke+strokeWidth+shapeEnd+svgEnd
    }

    if (type ==="svg"){

        let svgBegin = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
        let svgEnd = '</svg>';
        let shapeBegin = '<polyline';
        let shapeEnd = '/>';
        let points = ' points="'+svgElement.props.points+'"';
        let fill = ' fill="'+svgElement.props.fill+'"';
        let stroke = ' stroke="'+svgElement.props.stroke+'"';
        let strokeWidth = ' strokeWidth="'+svgElement.props.strokeWidth+'"';
        let height = ' height="500"';
        let width = ' width="500"';

        doc = svgBegin+shapeBegin+points+fill+stroke+strokeWidth+shapeEnd+svgEnd
    }

    console.log('doc', doc);
    return doc;

};

export const fileFactory = (payload) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(payload));
    element.setAttribute('download', "savedSVG.xml");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

