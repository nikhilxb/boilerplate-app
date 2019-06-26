import * as React from 'react';
import clsx from 'clsx';
import Immutable from 'seamless-immutable';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AppState } from '../../store';

/* This [pure dumb / stateful dumb / smart] component ___. */
type ExampleProps = {
    /* React components within opening & closing tags. */
    children?: React.ReactNode;
};

type ExampleState = {};

class Example extends React.Component<ExampleProps & InternalProps, ExampleState> {
    /* Prop default values. */
    static defaultProps = {
        // key: value,
    };

    /**
     * Constructor.
     * @param props
     */
    constructor(props: ExampleProps & InternalProps) {
        super(props);
        this.state = Immutable({});
    }

    /**
     * Renderer.
     */
    render() {
        const { classes } = this.props;
        return (
            <div
                className={clsx(classes.container, {
                    [classes.optional]: false,
                })}
            />
        );
    }
}

const styles = (theme: Theme) =>
    createStyles({
        // css-key: value,
        container: {},
        optional: {},
    });

// TODO: For dumb components:

type InternalProps = WithStyles<typeof styles>;

export default withStyles(styles)(Example) as React.ComponentType<ExampleProps>;

// TODO: For smart components:

function mapStateToProps() {
    // By returning function, it is possible to customize for each instance of a component depending
    // on its state and props. Also it creates a different selector for each instance so they don't
    // clash.
    return (state: AppState, props: ExampleProps) => ({
        // propName1: getExampleData(state.subslice),
        // propName2: createSelector(
        //     (state) => state.subslice,
        //     (state, props) => props.value,
        //     (subslice, value) => getExampleData(subslice) + value,
        // )(state, props),
    });
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
        {
            // propName: doSomethingAction,
        },
        dispatch,
    );
}

// type InternalProps = (
//     WithStyles<typeof styles> &
//     ReturnType<ReturnType<typeof mapStateToProps>> &
//     ReturnType<typeof mapDispatchToProps>
// );

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(withStyles(styles)(Example)) as React.ComponentType<ExampleProps>;
