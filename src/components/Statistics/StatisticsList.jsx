import PropTypes from 'prop-types';
import css from './Statics.module.css';
const StatsList = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default StatsList;
StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, percentage: PropTypes.number })
  ),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
