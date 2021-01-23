import React from 'react'
import { connect } from 'react-redux'
import ObjectView from './ObjectView.js'


const objectsList = ({views, form}) => {
    if (form === "new") {
        const newViews = [{objName : "Новый объект", id : Date.now().toString()}].concat(views)
        return newViews.map((view, index) => <ObjectView view={view} index={index} key={view.id}/>)
    }
    else {
        return views.map((view, index) => <ObjectView view={view} index={index} key={view.id}/>)
    }
}

const mapStateToProps = state => {
    return {
        views: state.objects.objects,
        form: state.form.form
    }
}

export default connect(mapStateToProps,null)(objectsList)