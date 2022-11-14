import $ from "jquery"

import { loadJS } from "../core/includes"

function preventLoad() {
    $(".list-category a").click((e) => {
        e.preventDefault()
    })
}

function filterGame() {
    const action = $(".game-container [category='action']")
    const emotional = $(".game-container [category='emotional']")
    const simulator = $(".game-container [category='simulator']")

    $(".global").click(() => {
        action.parent().show(600)
        emotional.parent().show(600)
        simulator.parent().show(600)
    })
    $(".action").click(() => {
        emotional.parent().hide(600)
        simulator.parent().hide(600)
        action.parent().show(600)
    })
    $(".emotional").click(() => {
        action.parent().hide(600)
        simulator.parent().hide(600)
        emotional.parent().show(600)
    })
    $(".simulator").click(() => {
        action.parent().hide(600)
        emotional.parent().hide(600)
        simulator.parent().show(600)
    })
}

loadJS(function () { preventLoad() })
loadJS(function () { filterGame() })