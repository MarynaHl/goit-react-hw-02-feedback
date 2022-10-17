import PropTypes from 'prop-types';

const Section = ({title , children }) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}