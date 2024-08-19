function getButtonStyling(styleType){
    const primaryStyle = "bg-blue-800";
    const secondaryStyle = "bg-gray-800";

    if(styleType == "primary")
        return primaryStyle;

    else if(styleType == "secondary")
        return secondaryStyle;
}

export default getButtonStyling;