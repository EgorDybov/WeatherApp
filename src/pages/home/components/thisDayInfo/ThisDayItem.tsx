import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { IItems } from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss'

interface IItem {
    item: IItems
}

export const ThisDayItem = ({ item }: IItem) => {
const {icon_id, name, value} = item;

  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};
