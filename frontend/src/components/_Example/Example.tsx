import * as React from 'react';
import clsx from 'clsx';
import Immutable from 'seamless-immutable';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { AppState } from '../../store';
import * as example from '../../store/_example';

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
        // cssKey: value,
        container: {},
        optional: {},
    });

// TODO: For dumb components:

// type InternalProps = WithStyles<typeof styles>;

// export default withStyles(styles)(Example) as React.ComponentType<ExampleProps>;

// TODO: For smart components:

function mapStateToProps() {
    return (state: AppState, props: ExampleProps) => {
        const exampleDataSelector = example.selectors.exampleDataFactory();
        return {
            propName1: exampleDataSelector(state),
            propName2: createSelector(
                (state: AppState, props: ExampleProps) => props.children,
                (children) => children,
            )(state, props),
        };
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
        {
            propName: example.actions.syncAction,
        },
        dispatch,
    );
}

type InternalProps = WithStyles<typeof styles> &
    ReturnType<ReturnType<typeof mapStateToProps>> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(Example)) as React.ComponentType<ExampleProps>;
