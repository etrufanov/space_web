import React from 'react'
import { connect } from 'react-redux'
import {createObject, emptyForm, editObject, deleteObject} from '../redux/actions'
import planet from './planet.png'
import Restrict from './Restrict'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            objName: '',
            objDate: '',
            objPriority: '',
            objArea: '',
            objNumber: '',
            objSlope: '',
            objApsis: '',
            objAxes: '',
            objAccentricity: '',
            objLongtitude: '',
            objAnomaly: '',
            objDarkness: '',
            objSize: '',
            objMass: '',
            objResistance: ''
        }
        this.form = "empty"
        this.nameRestrict = ''
        this.dateRestrict = ''
        this.priorityRestrict = ''
        this.areaRestrict = ''
        this.numberRestrict = ''
        this.slopeRestrict = ''
        this.apsisRestrict = ''
        this.axesRestrict = ''
        this.accentricityRestrict = ''
        this.longtitudeRestrict = ''
        this.anomalyRestrict = ''
        this.darknessRestrict = ''
        this.sizeRestrict = ''
        this.massRestrict = ''
        this.resistanceRestrict = ''
    }

    isFull = ({objName, objDate, objPriority, objArea, objNumber, objSlope, objApsis, objAxes, objAccentricity,
        objLongtitude, objAnomaly, objDarkness, objSize, objMass, objResistance}) => (
            objName.trim().length && objDate.trim().length && objPriority.trim().length &&
            objArea.trim().length && objNumber.trim().length && objApsis.trim().length && 
            objAxes.trim().length && objAccentricity.trim().length && objLongtitude.trim().length && 
            objAnomaly.trim().length && objDarkness.trim().length && objSize.trim().length && 
            objMass.trim().length && objResistance.trim().length && objSlope.trim().length)

    isValid = ({objName, objDate, objPriority, objArea, objNumber, objSlope, objApsis, objAxes, objAccentricity,
        objLongtitude, objAnomaly, objDarkness, objSize, objMass, objResistance}) => (
            parseFloat(objSlope) >= 0  && parseFloat(objSlope) <= 180 && parseFloat(objApsis) >= 0 && 
            parseFloat(objApsis) < 360 && parseFloat(objAxes) >= 6480 && parseFloat(objAxes) <= 40000 && 
            parseFloat(objAccentricity) >= 0 && parseFloat(objAccentricity) <= 1 && parseFloat(objLongtitude) >= 0 && 
            parseFloat(objLongtitude) <= 180 && parseFloat(objAnomaly) >= 0 && parseFloat(objAnomaly) <= 180 && 
            parseFloat(objDarkness) >= 0 && parseFloat(objDarkness) <= 1 && parseFloat(objSize) >= 0 &&
            parseFloat(objMass) > 0 && parseFloat(objResistance) >= 0 && parseFloat(objResistance) <= 2)

    noDuplicate = objName => ((this.props.objects.findIndex(
        obj => obj.objName === objName) === -1) || 
        (this.props.objects.findIndex(
        obj => obj.objName === objName) === this.props.index))

    submitHandler = (event, index=-1) => {
        event.preventDefault()

        const {
            objName, 
            objDate, 
            objPriority,
            objArea,
            objNumber,
            objSlope,
            objApsis,
            objAxes,
            objAccentricity,
            objLongtitude,
            objAnomaly,
            objDarkness,
            objSize,
            objMass,
            objResistance} = this.state
        if (this.isFull(this.state) && this.isValid(this.state) && this.noDuplicate(this.state.objName)) {
            const newObject = {
                objName,
                objDate,
                objPriority,
                objArea,
                objNumber,
                objSlope,
                objApsis,
                objAxes,
                objAccentricity,
                objLongtitude,
                objAnomaly,
                objDarkness,
                objSize,
                objMass,
                objResistance,
                id: Date.now().toString()
            }
            if (index === -1) {

                this.props.createObject(newObject)
            }
            else {
                this.props.editObject(newObject, index)
            }
            this.setState({ 
                objName: '',
                objDate: '',
                objPriority: '',
                objArea: '',
                objNumber: '',
                objSlope: '',
                objApsis: '',
                objAxes: '',
                objAccentricity: '',
                objLongtitude: '',
                objAnomaly: '',
                objDarkness: '',
                objSize: '',
                objMass: '',
                objResistance: ''})
            this.props.emptyForm()
        }
        else if (!this.isFull(this.state)) {
            let focus = 0
            if (!this.state.objName.trim().length) {
                this.nameRestrict = "Это обязательное поле"
                document.form.objName.focus()
                focus = 1
                this.setState(this.state)
            }
            
            if (!this.state.objDate.trim().length) {
                this.dateRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objDate.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objPriority.trim().length) {
                this.priorityRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objPriority.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objArea.trim().length) {
                this.areaRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objArea.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objNumber.trim().length) {
                this.numberRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objNumber.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objSlope.trim().length) {
                this.slopeRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objSlope.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objApsis.trim().length) {
                this.apsisRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objApsis.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objAxes.trim().length) {
                this.axesRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objAxes.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objAccentricity.trim().length) {
                this.accentricityRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objAccentricity.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objLongtitude.trim().length) {
                this.longtitudeRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objLongtitude.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objAnomaly.trim().length) {
                this.anomalyRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objAnomaly.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objDarkness.trim().length) {
                this.darknessRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objDarkness.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objSize.trim().length) {
                this.sizeRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objSize.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objMass.trim().length) {
                this.massRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objMass.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
            if (!this.state.objResistance.trim().length) {
                this.resistanceRestrict = "Это обязательное поле"
                if (!focus) {
                    document.form.objResistance.focus()
                    focus = 1
                }
                this.setState(this.state)
            }
        }
        else if (!(parseFloat(objSlope) >= 0  && parseFloat(objSlope) <= 180)) {
            document.form.objSlope.focus()
        }
        else if (!(parseFloat(objApsis) >= 0 && parseFloat(objApsis) < 360)) {
            document.form.objApsis.focus()
        }
        else if (!(parseFloat(objAxes) >= 6480 && parseFloat(objAxes) <= 40000)) {
            document.form.objAxes.focus()
        }
        else if (!(parseFloat(objAccentricity) >= 0 && parseFloat(objAccentricity) <= 1)) {
            document.form.objAccentricity.focus()
        }
        else if (!(parseFloat(objLongtitude) >= 0 && parseFloat(objLongtitude) <= 180)) {
            document.form.objLongtitude.focus()
        }
        else if (!(parseFloat(objAnomaly) >= 0 && parseFloat(objAnomaly) <= 180)) {
            document.form.objAnomaly.focus()
        }
        else if (!(parseFloat(objDarkness) >= 0 && parseFloat(objDarkness) <= 1)) {
            document.form.objDarkness.focus()
        }
        else if (!(parseFloat(objSize) >= 0)) {
            document.form.objSize.focus()
        }
        else if (!(parseFloat(objMass) > 0)) {
            document.form.objMass.focus()
        }
        else if (!(parseFloat(objResistance) >= 0 && parseFloat(objResistance) <= 2)) {
            document.form.objResistance.focus()
        }
        else if (!this.noDuplicate(objName)) {
            document.form.objName.focus()
        }

    }

    changeInputHandler = event => {
        event.persist()
        const field = event.target.name
        // objName.trim().length && objDate.trim().length && objPriority.trim().length &&
            // objArea.trim().length && objNumber.trim().length && slope && objApsis.trim().length && 
            // objAxes.trim().length && objAccentricity.trim().length && objLongtitude.trim().length && 
            // objAnomaly.trim().length && objDarkness.trim().length && objSize.trim().length && 
            // objMass.trim().length && objResistance.trim().length
        switch (field) {
            case 'objName':
                if (!event.target.value.trim().length) {
                    this.nameRestrict = "Это обязательное поле"
                }
                else if (!this.noDuplicate(event.target.value.trim())) {
                    this.nameRestrict = "Объект с таким названием уже существует"
                }
                else {
                    this.nameRestrict = ""
                }
                break
            case 'objDate':
                if (!event.target.value.trim().length) {
                    this.dateRestrict = "Это обязательное поле"
                }
                else {
                    this.dateRestrict = ""
                }
                break
            case 'objPriority':
                if (!event.target.value.trim().length) {
                    this.priorityRestrict = "Это обязательное поле"
                }
                else {
                    this.priorityRestrict = ""
                }
                break
            case 'objArea':
                if (!event.target.value.trim().length) {
                    this.areaRestrict = "Это обязательное поле"
                }
                else {
                    this.areaRestrict = ""
                }
                break
            case 'objNumber':
                if (!event.target.value.trim().length) {
                    this.numberRestrict = "Это обязательное поле"
                }
                else {
                    this.numberRestrict = ""
                }
                break
            case 'objSlope':
                if (!event.target.value.trim().length) {
                    this.slopeRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value) >= 0 && parseFloat(event.target.value) <= 180)) {
                    this.slopeRestrict = "Введите значение от 0 до 180°"
                }
                else {
                    this.slopeRestrict = ""
                }
                break
            case 'objApsis':
                if (!event.target.value.trim().length) {
                    this.apsisRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) < 360)) {
                    this.apsisRestrict = "Введите значение от 0 до 360°"
                }
                else {
                    this.apsisRestrict = ""
                }
                break
            case 'objAxes':
                if (!event.target.value.trim().length) {
                    this.axesRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 6480 && parseFloat(event.target.value.trim()) <= 40000)) {
                    this.axesRestrict = "Введите значение от 6480 до 40000"
                }
                else {
                    this.axesRestrict = ""
                }
                break
            case 'objAccentricity':
                if (!event.target.value.trim().length) {
                    this.accentricityRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) <= 1)) {
                    this.accentricityRestrict = "Введите значение от 0 до 1"
                }
                else {
                    this.accentricityRestrict = ""
                }
                break
            case 'objLongtitude':
                if (!event.target.value.trim().length) {
                    this.longtitudeRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) <= 180)) {
                    this.longtitudeRestrict = "Введите значение от 0 до 180°"
                }
                else {
                    this.longtitudeRestrict = ""
                }
                break
            case 'objAnomaly':
                if (!event.target.value.trim().length) {
                    this.anomalyRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) <= 180)) {
                    this.anomalyRestrict = "Введите значение от 0 до 180°"
                }
                else {
                    this.anomalyRestrict = ""
                }
                break
            case 'objDarkness':
                if (!event.target.value.trim().length) {
                    this.darknessRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) <= 1)) {
                    this.darknessRestrict = "Введите значение от 0 до 1"
                }
                else {
                    this.darknessRestrict = ""
                }
                break
            case 'objSize':
                if (!event.target.value.trim().length) {
                    this.sizeRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0)) {
                    this.sizeRestrict = "Введите неотрицательное значение"
                }
                else {
                    this.sizeRestrict = ""
                }
                break
            case 'objMass':
                if (!event.target.value.trim().length) {
                    this.massRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) > 0)) {
                    this.massRestrict = "Введите положительное значение"
                }
                else {
                    this.massRestrict = ""
                }
                break
            case 'objResistance':
                if (!event.target.value.trim().length) {
                    this.resistanceRestrict = "Это обязательное поле"
                }
                else if (!(parseFloat(event.target.value.trim()) >= 0 && parseFloat(event.target.value.trim()) <= 2)) {
                    this.resistanceRestrict = "Введите значение от 0 до 2"
                }
                else {
                    this.resistanceRestrict = ""
                }
                break
                    
            default:
                break;
        }
        this.setState(prev => ({...prev, ...{
          [event.target.name]: event.target.value
        }}))
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.form !== this.props.form || prevProps.index !== this.props.index) {
            this.nameRestrict = ''
            this.dateRestrict = ''
            this.priorityRestrict = ''
            this.areaRestrict = ''
            this.numberRestrict = ''
            this.slopeRestrict = ''
            this.apsisRestrict = ''
            this.axesRestrict = ''
            this.accentricityRestrict = ''
            this.longtitudeRestrict = ''
            this.anomalyRestrict = ''
            this.darknessRestrict = ''
            this.sizeRestrict = ''
            this.massRestrict = ''
            this.resistanceRestrict = ''
            if (this.props.form === "edit") {
                this.setState(this.props.objects[this.props.index])
            }
            else {
                this.setState({
                    objName: '',
                    objDate: '',
                    objPriority: '',
                    objArea: '',
                    objNumber: '',
                    objSlope: '',
                    objApsis: '',
                    objAxes: '',
                    objAccentricity: '',
                    objLongtitude: '',
                    objAnomaly: '',
                    objDarkness: '',
                    objSize: '',
                    objMass: '',
                    objResistance: ''
                })
            }
            // console.log('this', this.props.form, this.props.objects[this.props.index])
        }
    }

    // editHandler = (event, index) => {
    //     event.preventDefault()
    //     // console.log(index)

    //     const {
    //         objName, 
    //         objDate, 
    //         objPriority,
    //         objArea,
    //         objNumber,
    //         objSlope,
    //         objApsis,
    //         objAxes,
    //         objAccentricity,
    //         objLongtitude,
    //         objAnomaly,
    //         objDarkness,
    //         objSize,
    //         objMass,
    //         objResistance} = this.state

    //     if (this.isFull(this.state) && this.isValid(this.state) && this.noDuplicate(this.state.objName)) {
    //         const newObject = {
    //             objName,
    //             objDate,
    //             objPriority,
    //             objArea,
    //             objNumber,
    //             objSlope,
    //             objApsis,
    //             objAxes,
    //             objAccentricity,
    //             objLongtitude,
    //             objAnomaly,
    //             objDarkness,
    //             objSize,
    //             objMass,
    //             objResistance,
    //             id: Date.now().toString()
    //         }
    //         this.props.editObject(newObject, index)
    //         this.setState({ 
    //             objName: '',
    //             objDate: '',
    //             objPriority: '',
    //             objArea: '',
    //             objNumber: '',
    //             objSlope: '',
    //             objApsis: '',
    //             objAxes: '',
    //             objAccentricity: '',
    //             objLongtitude: '',
    //             objAnomaly: '',
    //             objDarkness: '',
    //             objSize: '',
    //             objMass: '',
    //             objResistance: ''})
    //         this.props.emptyForm()
    //     }
    //     else if (!this.isFull(this.state)) {
    //         alert('Пожалуйста, заполните все поля!')
    //     }
    //     else if (!this.isValid(this.state)) {
    //         alert('Пожалуйста, проверьте корректность введённых данных!')
    //     }
    //     else if (!this.noDuplicate(this.state.objName)) {
    //         alert('Объект с таким именем уже существует!')
    //     }
    // }

    deleteObject = (event, index) => {
        event.preventDefault()
        this.props.deleteObject(index)
        this.setState({ 
            objName: '',
            objDate: '',
            objPriority: '',
            objArea: '',
            objNumber: '',
            objSlope: '',
            objApsis: '',
            objAxes: '',
            objAccentricity: '',
            objLongtitude: '',
            objAnomaly: '',
            objDarkness: '',
            objSize: '',
            objMass: '',
            objResistance: ''})
        this.props.emptyForm()
    }

    render() {
        if (this.props.form === "new") {
            return (
                <div>
                    <div className="FormHeader">
                        <h3>Создание регулярной группы целевых объектов</h3>
                        {/* <button className="DelBtn">УДАЛИТЬ</button> */}
                    </div>
                    <form name="form" onSubmit={this.submitHandler}>
                        <div className="ParamsGroupTop">
                            <div>
                                <label htmlFor="name" className="NameLabel">ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="objName"
                                    value={this.state.objName} 
                                    placeholder="Название объекта"
                                    onChange={this.changeInputHandler} 
                                    className="NameInp"/>
                                <Restrict text={this.nameRestrict}/>
                            </div>
                        </div>
                        <div className="ParamsGroupMidOne">
                            <div>
                                <label htmlFor="date" className="NameLabel">ДАТА И ВРЕМЯ ОТСЧЕТА</label>
                                <input 
                                    type="datetime-local" 
                                    step=".000001" 
                                    id="date" 
                                    name="objDate"
                                    value={this.state.objDate}
                                    onChange={this.changeInputHandler} 
                                    placeholder="25/05/2020 10:10:55.282000"/>
                                <Restrict text={this.dateRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="priority" className="NameLabel">ПРИОРИТЕТ ПОИСКА (ОТ 1)</label>
                                <input 
                                    type="number" 
                                    id="priority" 
                                    name="objPriority"
                                    value={this.state.objPriority}
                                    onChange={this.changeInputHandler} 
                                    placeholder="1" 
                                    min="1"/>
                                <Restrict text={this.priorityRestrict}/>
                            </div>
                            <div>
                            </div>
                            <div>
                                <label htmlFor="area" className="NameLabel">КОЛИЧЕСТВО ПЛОСКОСТЕЙ</label>
                                <input 
                                    type="number" 
                                    id="area" 
                                    name="objArea"
                                    value={this.state.objArea}
                                    onChange={this.changeInputHandler} 
                                    placeholder="5" 
                                    min="0"/>
                                <Restrict text={this.areaRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="object" className="NameLabel">КОЛИЧЕСТВО ОБЪЕКТОВ НА ПЛОСКОСТИ</label>
                                <input 
                                    type="number" 
                                    id="object" 
                                    name="objNumber" 
                                    value={this.state.objNumber}
                                    onChange={this.changeInputHandler}
                                    placeholder="4"
                                    min="0"/>
                                <Restrict text={this.numberRestrict}/>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="ParamsGroupMidTwo">
                            <div>
                                <label htmlFor="slope" className="NameLabel">НАКЛОНЕНИЕ ОРБИТЫ</label>
                                <input 
                                    type="text" 
                                    id="slope" 
                                    name="objSlope"
                                    value={this.state.objSlope}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180°"/>
                                <Restrict text={this.slopeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="apsis" className="NameLabel">АРГУМЕНТ ПЕРИЦЕНТРА</label>
                                <input 
                                    type="text" 
                                    id="apsis"
                                    name="objApsis" 
                                    value={this.state.objApsis}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 360°"/>
                                <Restrict text={this.apsisRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="axes" className="NameLabel">БОЛЬШАЯ ПОЛУОСЬ</label>
                                <input 
                                    type="text" 
                                    id="axes" 
                                    name="objAxes"
                                    value={this.state.objAxes}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 6480 до 40000 км"/>
                                <Restrict text={this.axesRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="accentricity" className="NameLabel">ЭКСЦЕНТРИСИТЕТ</label>
                                <input 
                                    type="text" 
                                    id="accentricity" 
                                    name="objAccentricity"
                                    value={this.state.objAccentricity}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <Restrict text={this.accentricityRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="longitude" className="NameLabel">ДОЛГОТА ВОСХОДЯЩЕГО УЗЛА</label>
                                <input 
                                    type="text" 
                                    id="longitude" 
                                    name="objLongtitude"
                                    value={this.state.objLongtitude}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180° первого объекта"/>
                                <Restrict text={this.longtitudeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="anomaly" className="NameLabel">ИСТИННАЯ АНОМАЛИЯ</label>
                                <input 
                                    type="text" 
                                    id="anomaly" 
                                    name="objAnomaly"
                                    value={this.state.objAnomaly}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180° первого объекта"/>
                                <Restrict text={this.anomalyRestrict}/>
                            </div>
                        </div>
                        <div className="ParamsGroupBot">
                            <div>
                                <label htmlFor="darkness" className="NameLabel">СТЕПЕНЬ ЧЕРНОТЫ</label>
                                <input 
                                    type="text" 
                                    id="darkness" 
                                    name="objDarkness"
                                    value={this.state.objDarkness}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <Restrict text={this.darknessRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="size" className="NameLabel">ЛИНЕЙНЫЙ РАЗМЕР</label>
                                <input 
                                    type="text" 
                                    id="size" 
                                    name="objSize"
                                    value={this.state.objSize}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 метра"/>
                                <Restrict text={this.sizeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="mass" className="NameLabel">МАССА</label>
                                <input 
                                    type="text" 
                                    id="mass" 
                                    name="objMass"
                                    value={this.state.objMass}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 килограмма"/>
                                <Restrict text={this.massRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="resistance" className="NameLabel">КОЭФФИЦИЕНТ ЛОБОВОГО СОПРОТИВЛЕНИЯ</label>
                                <input 
                                    type="text" 
                                    id="resistance" 
                                    name="objResistance"
                                    value={this.state.objResistance}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 2,0"/>
                                <Restrict text={this.resistanceRestrict}/>
                            </div>
                        </div>
                        <button type="submit" className="CreateBtn">
                            СОЗДАТЬ ГРУППУ ОБЪЕКТОВ
                        </button>
                    </form>
                </div>
            )
        }
        else if (this.props.form === "edit") {
            // this.editForm()
            // console.log(this.props.form, this.props.index, this.state.objName, this.props.objects[this.props.index])
            return (
                <div>
                    <div className="FormHeader">
                        <h3>Создание регулярной группы целевых объектов</h3>
                        <button className="DelBtn" onClick={event => this.deleteObject(event, this.props.index)}>УДАЛИТЬ</button>
                    </div>
                    <form name="form" onSubmit={event => this.submitHandler(event, this.props.index)}>
                        <div className="ParamsGroupTop">
                            <div>
                                <label htmlFor="name" className="NameLabel">ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="objName"
                                    value={this.state.objName} 
                                    placeholder="Название объекта"
                                    onChange={this.changeInputHandler} 
                                    className="NameInp"/>
                                <Restrict text={this.nameRestrict}/>
                            </div>
                        </div>
                        <div className="ParamsGroupMidOne">
                            <div>
                                <label htmlFor="date" className="NameLabel">ДАТА И ВРЕМЯ ОТСЧЕТА</label>
                                <input 
                                    type="datetime-local" 
                                    step=".000001" 
                                    id="date" 
                                    name="objDate"
                                    value={this.state.objDate}
                                    onChange={this.changeInputHandler} 
                                    placeholder="25/05/2020 10:10:55.282000"/>
                                <Restrict text={this.dateRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="priority" className="NameLabel">ПРИОРИТЕТ ПОИСКА (ОТ 1)</label>
                                <input 
                                    type="number" 
                                    id="priority" 
                                    name="objPriority"
                                    value={this.state.objPriority}
                                    onChange={this.changeInputHandler} 
                                    placeholder="1" 
                                    min="1"/>
                                <Restrict text={this.priorityRestrict}/>
                            </div>
                            <div>
                            </div>
                            <div>
                                <label htmlFor="area" className="NameLabel">КОЛИЧЕСТВО ПЛОСКОСТЕЙ</label>
                                <input 
                                    type="number" 
                                    id="area" 
                                    name="objArea"
                                    value={this.state.objArea}
                                    onChange={this.changeInputHandler} 
                                    placeholder="5" 
                                    min="0"/>
                                <Restrict text={this.areaRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="object" className="NameLabel">КОЛИЧЕСТВО ОБЪЕКТОВ НА ПЛОСКОСТИ</label>
                                <input 
                                    type="number" 
                                    id="object" 
                                    name="objNumber" 
                                    value={this.state.objNumber}
                                    onChange={this.changeInputHandler}
                                    placeholder="4"
                                    min="0"/>
                                <Restrict text={this.numberRestrict}/>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="ParamsGroupMidTwo">
                            <div>
                                <label htmlFor="slope" className="NameLabel">НАКЛОНЕНИЕ ОРБИТЫ</label>
                                <input 
                                    type="text" 
                                    id="slope" 
                                    name="objSlope"
                                    value={this.state.objSlope}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180°"/>
                                <Restrict text={this.slopeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="apsis" className="NameLabel">АРГУМЕНТ ПЕРИЦЕНТРА</label>
                                <input 
                                    type="text" 
                                    id="apsis"
                                    name="objApsis" 
                                    value={this.state.objApsis}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 360°"/>
                                <Restrict text={this.apsisRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="axes" className="NameLabel">БОЛЬШАЯ ПОЛУОСЬ</label>
                                <input 
                                    type="text" 
                                    id="axes" 
                                    name="objAxes"
                                    value={this.state.objAxes}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 6480 до 40000 км"/>
                                <Restrict text={this.axesRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="accentricity" className="NameLabel">ЭКСЦЕНТРИСИТЕТ</label>
                                <input 
                                    type="text" 
                                    id="accentricity" 
                                    name="objAccentricity"
                                    value={this.state.objAccentricity}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <Restrict text={this.accentricityRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="longitude" className="NameLabel">ДОЛГОТА ВОСХОДЯЩЕГО УЗЛА</label>
                                <input 
                                    type="text" 
                                    id="longitude" 
                                    name="objLongtitude"
                                    value={this.state.objLongtitude}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180° первого объекта"/>
                                <Restrict text={this.longtitudeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="anomaly" className="NameLabel">ИСТИННАЯ АНОМАЛИЯ</label>
                                <input 
                                    type="text" 
                                    id="anomaly" 
                                    name="objAnomaly"
                                    value={this.state.objAnomaly}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0 до 180° первого объекта"/>
                                <Restrict text={this.anomalyRestrict}/>
                            </div>
                        </div>
                        <div className="ParamsGroupBot">
                            <div>
                                <label htmlFor="darkness" className="NameLabel">СТЕПЕНЬ ЧЕРНОТЫ</label>
                                <input 
                                    type="text" 
                                    id="darkness" 
                                    name="objDarkness"
                                    value={this.state.objDarkness}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <Restrict text={this.darknessRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="size" className="NameLabel">ЛИНЕЙНЫЙ РАЗМЕР</label>
                                <input 
                                    type="text" 
                                    id="size" 
                                    name="objSize"
                                    value={this.state.objSize}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 метра"/>
                                <Restrict text={this.sizeRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="mass" className="NameLabel">МАССА</label>
                                <input 
                                    type="text" 
                                    id="mass" 
                                    name="objMass"
                                    value={this.state.objMass}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 килограмма"/>
                                <Restrict text={this.massRestrict}/>
                            </div>
                            <div>
                                <label htmlFor="resistance" className="NameLabel">КОЭФФИЦИЕНТ ЛОБОВОГО СОПРОТИВЛЕНИЯ</label>
                                <input 
                                    type="text" 
                                    id="resistance" 
                                    name="objResistance"
                                    value={this.state.objResistance}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 2,0"/>
                                <Restrict text={this.resistanceRestrict}/>
                            </div>
                        </div>
                        <button type="submit" className="CreateBtn">
                            ИЗМЕНИТЬ ГРУППУ ОБЪЕКТОВ
                        </button>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="PlanetOut">
                    <div className="PlanetIn">
                        <img src={planet} alt="" width="144px" height="144px" style={{opacity:0.5}} />
                        <p style={{opacity:0.5, marginTop:"20px"}}>Создайте новый объект или отредактируйте существующий</p>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        objects: state.objects.objects,
        form: state.form.form,
        index: state.form.index
    }
}

const mapDispatchToProps = {
    createObject,
    emptyForm,
    editObject,
    deleteObject
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)