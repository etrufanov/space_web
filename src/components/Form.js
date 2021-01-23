import React from 'react'
import { connect } from 'react-redux'
import {createObject, emptyForm, editObject, deleteObject} from '../redux/actions'
import planet from './planet.png'

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
    }

    isFull = ({objName, objDate, objPriority, objArea, objNumber, objSlope, objApsis, objAxes, objAccentricity,
        objLongtitude, objAnomaly, objDarkness, objSize, objMass, objResistance}) => (
            objName.trim().length && objDate.trim().length && objPriority.trim().length &&
            objArea.trim().length && objNumber.trim().length && objApsis.trim().length && 
            objAxes.trim().length && objAccentricity.trim().length && objLongtitude.trim().length && 
            objAnomaly.trim().length && objDarkness.trim().length && objSize.trim().length && 
            objMass.trim().length && objResistance.trim().length)

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
                                obj => obj.objName === objName) === this.props.index) ? true : false)

    submitHandler = event => {
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
            this.props.createObject(newObject)
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
            alert('Пожалуйста, заполните все поля!')
        }
        else if (!this.isValid(this.state)) {
            alert('Пожалуйста, проверьте корректность введённых данных!')
        }
        else if (!this.noDuplicate(this.state.objName)) {
            alert('Объект с таким именем уже существует!')
        }

    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
          [event.target.name]: event.target.value
        }}))
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.form !== this.props.form || prevProps.index !== this.props.index) {
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

    editHandler = (event, index) => {
        event.preventDefault()
        // console.log(index)

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
            this.props.editObject(newObject, index)
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
            alert('Пожалуйста, заполните все поля!')
        }
        else if (!this.isValid(this.state)) {
            alert('Пожалуйста, проверьте корректность введённых данных!')
        }
        else if (!this.noDuplicate(this.state.objName)) {
            alert('Объект с таким именем уже существует!')
        }
    }

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
                    <form onSubmit={this.submitHandler}>
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
                                <p className="restrict">Введите значение от 0 до 180°</p>
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
                            </div>
                            <div>
                                <label htmlFor="eccentricity" className="NameLabel">ЭКСЦЕНТРИСИТЕТ</label>
                                <input 
                                    type="text" 
                                    id="eccentricity" 
                                    name="objAccentricity"
                                    value={this.state.objAccentricity}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <p className="restrict">Введите значение от 0,0 до 1,0</p>
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
                                <p className="restrict">Введите значение от 0,0 до 1,0</p>
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
                                <p className="restrict">Введите значение от 0,0 до 2,0</p>
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
                    <form onSubmit={event => this.editHandler(event, this.props.index)}>
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
                                <p className="restrict">Введите значение от 0 до 180°</p>
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
                            </div>
                            <div>
                                <label htmlFor="eccentricity" className="NameLabel">ЭКСЦЕНТРИСИТЕТ</label>
                                <input 
                                    type="text" 
                                    id="eccentricity" 
                                    name="objAccentricity"
                                    value={this.state.objAccentricity}
                                    onChange={this.changeInputHandler} 
                                    placeholder="От 0,0 до 1,0"/>
                                <p className="restrict">Введите значение от 0,0 до 1,0</p>
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
                                <p className="restrict">Введите значение от 0,0 до 1,0</p>
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
                                <p className="restrict">Введите значение от 0,0 до 2,0</p>
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