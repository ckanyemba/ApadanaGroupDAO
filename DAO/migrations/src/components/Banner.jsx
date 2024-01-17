import {useState} from 'react';
import { useGlobalState, setGlobalState } from '../store';
import { toast } from 'react-toastify';
import { performContribute } from '../Blockchain.services';

const Banner = () => {
    const [isStakeholder] = useGlobalState('isStakeholder')
    const [proposals] = useGlobalState('proposals')
    const [balance] = useGlobalState('balance')
    const [mybalance] = useGlobalState('mybalance')
    const [amount, setAmount] = useState('')

    const onPropose = () => {
        if (!isStakeholder) return
        setGlobalState('createModal', 'scale-100')
    }

    const onContribute = async () => {
        if (!!!amount || amount == '') return
        await performContribute(amount)
        toast.success('Contribution received')
    }

    const opened = () =>
    proposals.filter(
        (proposal) => new Date().getTime() < Number(proposal.duration + '000'),
    ).length


    return (
        <div className="p-8">
            <h2 className="font-semibold text-3xl mb-5">
                {5} Proposals Currently Opened
            </h2>
            <p>
                Current DAO Balance: {' '}
                <strong>{3} ETH</strong>
                <br />
                <span>
                    <strong>
                        {5} ETH
                    </strong>
                    {false ? ', and you are now a stakeholder' : null}
                </span>
            </p>
        </div>
    )
}

export default Banner;