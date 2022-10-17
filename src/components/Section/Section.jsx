import PropTypes from 'prop-types';

const Section = ({title , children }) => (
    <>
        <h2 class="Section_title__SLHvV" >{title}</h2>
        {children}
    </>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}