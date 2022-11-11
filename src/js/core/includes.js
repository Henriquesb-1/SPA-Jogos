import $ from "jquery"

const functionsCallbacks = []

export function loadJS(functionToExecute) {
    if(!functionsCallbacks.includes(functionToExecute)) {
        functionsCallbacks.push(functionToExecute)
    }
}

function includePages(parent) {
    if(!parent) parent = "body"
    $(parent).find("[include]").each(function(i, e) {
        const url = $(e).attr("include")
        $.ajax({
            url: url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr("include")

                functionsCallbacks.forEach(Element => Element(data))
                includePages(e)
            }
        })
    })
}
includePages()