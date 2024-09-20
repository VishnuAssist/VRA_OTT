import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VoucherType } from '../Models/VoucherType';

export interface VoucherState {
  voucherList: VoucherType[];
  selectedVoucher: VoucherType | null;
  searchTerm: string;
  filterType: string;
}

const initialState: VoucherState = {
  voucherList: [
    {
        voucherId: "POL001",
        voucherName: "Community Policing Workshop",
        voucherDescription: "Attend a day-long workshop on community policing strategies and earn a certificate.",
        voucherStartDate: "2023-07-01",
        voucherEndDate: "2023-12-31",
        voucherBrand: "City Police Department",
        voucherType: "Multi-Use",
        voucherImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAABO1BMVEX////6v8HvOTgAAADqsrH6w8X6vL796Ojuw8HqsK/vMTD0gYH1g4T+9PPuPTrvMzLPz8+vr6/l5eXHx8cVFRWAgICcnJz++vqnp6fvLizzdHXf39/snp27u7uKioq+vr7q6urX19dISEg5OTn82NnxQ0JRUVGgoKBkZGSHh4d4eHjuIiGTk5MiIiLy8vLtAABbW1v4srL74OD6zs4tLS31l5dsbGzyYF/0j47xVFPwS0nUoqTuHh3yamr4tradeXryb29vGxrrm5qMbG27kJHPn6CpgoPwWlnxZGTVfn3l0tK7S0uwICCFAADLKSimcXBYAAAiCAg8IiLLjIyPIiLBJCTNsrMRHByxKilXFRXDPj0xAACBKCl8ExOhJyZIV1YfCQlDAACLYF8AICA/DA1pAgB8YV9cSEdCMjPyoprDAAAWD0lEQVR4nO2di1/iyJbHCyIwC8SkEsjDEJIgGiExvARREHvUVu/cub13du/M9uzs3H07+///BXuqwktNJDxCt/3h1y2EvOtL5dQ5lToEJXZaLPSlT+BdaEcpinaUomhHKYp2lKJoRymKdpSiaEcpinaUomhHKYp2lKJoRymKdpSiaEcpinaUomhHKYp2lKJoRymKdpSiKIBSKlyJ9LeiN0sZgVKqexCmbifzrajT/RBSyA/d15gCKOXUbKBUJ51B34oy6WGWC5Sai0Qpn00GKZscfTuQANMoGVLOdSipB1X5S5dso5KrB+qmKXEH7S9drI2rfcBtmJLa+pYuN1+ZVlBlWodStv8NUuoHlnQtu9Sdx2TZ5bIifLHybUSZ7sbtEmB66LDj/cs93UNIkIpvnMPXburZzkMgpDUpJblkZ1ydFA25hxUR6bxbqxWLklxAJ2at19ORjURNNxUkYd77shQWKNMJcQTWpZRUc1X/EJKHmoJZQJZYLp7UlbJk6/WTeg01ERZ5wxCwLa5JKbOsFRRkAVmeJ/Ai8nRL8zSEREskC5BmemAbeFHQPd3UNX/9ai64Jq1PKfth7DKJBupVKnVke2WpVxSlptSreye9mo14y9Z5W0Mi1lalJKfy+5f5i5vltvJ4Q5A004AKjkRPMQ2YIxqaBawUC4vATdSRIRsK7x+k+iG0lGtScloTn6mOmqLFwJsGVUaw4M/UPNPzNMGz4IzJWZurUWrnnQZpTrvn83NHo4UbKhrWsWboGo8MD8B4sm7o0MwYGGOzTL5Zw7Jsj9fHx2k5sVDinP7UsVQsvVjTMI9MAfOizlu6rSDNwDw2lJXgjFW9GjbytI1QS7O57KXTyC/a1IN/8FUJAp3UBBPBt4boi0m+N0GT4Tr0hMmX1+47QT7lmpSylwl2dk4ncDALviHPszTesjTBEmVTtixBE1dv3DIHQ+fSN339xmw38n42m3fYsK1WFZu4DMS0VoTy8DyM62GptuHTLjmq0/cnO43WbP4H1UmzjY1TAtv0EHuEom3Yp8w8OJyTGk8Pr2YL0g73iDrZzR7NP8zGI5TnrvfmBSzUy/Eh2OwRrbddUn9kMIhVdJCL4ZjBzvd61ju9+To/U36YVK/GlzS7r1Jco8YBvHZV7gplGtRcbfaLYtOB5VwzQum344o65Ec16UxqC3vkQ5KT2Qv45CSdDjqgfoE8LIXuYvljtvOxRCjqQzWe6sReZpMTu40ynOo7HC3HAS+pr3KXYMzb/pxhd2PHrIaEcetHKP3qpk5yXhmIEJ1J8avO/vi6ag33oTDDpJNGnI/wggNiG1K1H1eEwl3F0amb4eYgpYYX0/pahe/kRk1mUe7I/wy2qxW0hxUkV6+CfcoNRCjdGOoSu8/NLrdS40Vbtg+Na9q/3hCc1+Z8y2pw59L6lNTHGKqSfMQl1QmafGNqnjPUd0o4yWyrAeap2qp21CR30Ul8t6HjVh9jsUvZWDymh2xS/eBPshfqrK5eqUl4feSSRyqpaN81HBqdqo3Epo6c6WY3HqEkj1Jhtb01p9FoRG8vkxvMHaIqURuUyWRY9lVdzEEFGVvkqnMwW9xxsgekQpE7XLRIDVIiVXUexivILAt7JDumR6DHIjev6U16OIv5kwo5bzZ1tGlK6k1YTZLV0WgMh25O1elMGPmAgBAwkl9SIt0Xqk+/9KyWPHDgJYFHCZe5PyMNMZfaLU3jJFkmeySkMj6p8RHn7vT7uEYjNcxOZG42HqGUQimt3jq3AdKwQ6bYx4P5snQcjlSa/SQ37WbKZbO0VslL3xe8DKVU2jQl7iLMdK9B6QKaN9onmfrwvPV8pIEvNP1OZ+RXMRa8c7pO98OyRwmjJHcuNt0nkOSOWsGGaXVKJWjBSF2RRy88jPYwSWw3OH5H/SFHZ92QcI4saizdhhwFU2JbR5u33hCa5wMru3y07GlPThNYBDtAuSx1H8l9dy45JKv44Rzosh+0wZsKpARhXEiX7tpeZSkI08qUcuAlvm5/2BaSHUqv44A1VH1K51m/Keyu4FcGUmqX4un3nruH8kyrUgLTzU3a9c50v51sBo3ULPEzwWrsV4EUoteeSm4QtBsrhChBlGK8h6LmgyKUVSmRqjSpm30nN6pCm9664NrUdnd8q5VDQ+4CahBcm7Q9P1rFBgbWpWpIv8nalLJHnaDqviIlaLSy06CN5YagxtA5p0u4pO9RQkN3oF7eXA77Wbpuv7FKIBlIie0cxXJvV70K7l6S91c4c3AooWmfNVdsK3fQT59z+1CiFPW7SSsNDiebdBpJCE2JZ9AZrtSvux942mz1KoZeuGyYW7kipXMu+7LMUImIp91SoYW7cY6S9JPTAqP1wBFgXHalLoFgSmFOZUzjl9iVKIEbMHzZYgKeG/rmdNqN/EWS3LnsEOONLrJgkB6Hq0W6YZRiGL8UPhZuNUrjGOSZHjjqXmdUNXW0D3aJGPc8DUtKEOX2V7ve3qK08TtN3FVY/LSAkgDyZpPk3TQU5U9Z2rRPlsrw/oNDPG4NK3/mVLWdAkdBEMwh6WYStH3ug7OvCVMhczwRYTRCKKV2YH/lemPhwrpzF1A6YxjGHw3mwRQjI69H3n9MOj+MZ5HxMxq8/yWZzWuHZM73n/6R9Af8zDB/JQ4ALPzp0/Don5iZUH0ydSatSEkOMd9r9sKFXHQLKBEmTTplwtQh8gqMT+kTYz6n9CmZ/ecphh7EJn9jmJ/JVSaQGb+gf5mnVJxNny7oQQ2mBJdbDKMpQM4o6KpbQEmCchTolAhTJ+jEL9rP3Gfm+Bmlv8FJF2Zl309yvzI/UUNFKfFobuEzSkx9BUrtUWwRSuDA+AWUDFooIgwTLuVScN1/5aCmaPKM0q8A6Wfy8VAqkzcwhQzzd9ohMEfprOKLUipUKqcU09vGKYiSXD2IK0JZiRK5lhg6TK8GEzqFJpBuyO8ZRkFTSr/B/rl/GxMltQ6COHj5/QUle7JbQukY3l1/2ddDiVMTQYZpAaXpRYWaBBe5AE8RcbCBUm1K6QdiSI+ak8uH1qVPzN+TzAtKU1M9oURro740JZRJhJildSOUo+DxFIv8pWkVIK2dV6YmnHiVvxMiY0ptAinb/3dm3B4WiC3/9Bv3+0JKdA94eUqITR/FEKGoByGR5iJKzXHRZVqLJpTQ1Y8zSglqSZ328Ryl7+G7/sTERwmhGLJ1sger+t7EHFWQb6AqM0pP2f+YUOoPOfVzMnmJKhNKZPbg8dNPsVJCmUDbFFOEknybEp4zycUZpZPf9/+TUvo+qTpHg7+C7Z5Rou61MmkdF1IyVqS0+Wyd/KqU+HFbbVP7NKPE/Lp/lPv8eZ9zLlvoOzjf0xklqiBKr9o4b9qErkApuKRr2aWwToFFlCblqFMTNEeJYf6r9OPPn//yC8S+eS75+b+DKImGIeIZpaYLKvMzSsVxm7kCpUzw4Jw127iLwK7KxX0C47b6mDpKzyhNrHc1B+3yT4F1aap531sZ02k2C1M/Y1lKbOci5myd5ShVfHviXz9BlNhL9AABy9KUfBXetkph/lKKi8VfmsvWWY4SudR6Y0cgkNJFNTNM/rQqJWZRp0AgpWoutggl8E7TQkrEbFeQRVkFUfpzH+XVvzPBlGrFYq0+o9TDIMV6RolZkNQRHKFsIVtnKUokdCvQVzeI0v+oMuvsMyGUyIQ5o/SsjasIGjXszPKUYszW6QZ2Vy6kRONdjwRwehClT13UH/7ynNLh2VnBjOQvES+MsZanhNrdOLJ1uIuQYV4LKdGAVKv7pXlF6TeHbzfSwnNKZAsBR6E0aUGXpoTY1GXwzaL1snVCTmLx3YFDKIhBCMgBlH5V75IJWt/mKBWWo/S2YQr1KreQrbMEJRLvuqd+kV9fcf97w6I1Ka0ax20xW2cxJUKmUpj1mp1N0BWn/UsWpTTtEyCzzfgpbT5bhxuFHGwxJTxusYtoFvsi39Nh/JaPzq5Qz+psgsWLFMetQYkdxTDKS80HZ+sspmTN+TW0wTvm+RO/5E0639LJW81HWOeNQ0oriFJTcqnWp7TlbJ3FlMwxJRpvnTFTnY7vHYxl+YHxWHYgpYnWtt7bztaJMJpiXD6TTFuzopJO/cr0E+nwngUlp8E9J8GU7NAjU0qB45fiy9YJHgu3mNKhXzR/Y35SWj+Ub85B8qMZosq4Q4pS0nxKc5D8e7ukB5Ri7i1NCSKU7WbrRKAkkugLT30/vdhs1vXJufPl5nHTnXSkmUqveVKmt44sshGZ8BSI3UyE54R4eKGdAfz8niNTQtVuTHctneCRAiuPPt2WgsfoVq/iGKPLhWXrvE9K287Wea+UYsnWCc9Dea+Utput834pbT5b57ITcrB3S0nuBP7QydeWrbMlheQ0xZOtk3RygYHc+6Qkt3OxZesEepUxUnp2e2Qy0tQ0l9tJIKXqzZazdZaiVCeRiHBM3GarSfpMkHJCXnUSlPWASvHkpDmGY50wdRMW0YEAQoGMNwRHHMLlylK56EGUYoxQQrJ1lqIkkYFwEg186/5Qvxrjz4cXEpAdFmpFP8YXmONDEsgJNRLyHTOiRLpIioyOaZfUWpS2n62zFCWTdDee+tF8k3br+5Rs8loglI4nq2KG7wnYI+MxROQRMqewvACV8fhwmUMGUootWyfwegNKF8ucMqqcQYxP6BiMQIm8pHTq1vzQ12SYQ3oPSQRKJtmmUkEyoVVccAfuuS6CT7v6IYZeOK4UFqE454+gq6urg4ODXC6X7/f73W63VCI/LwC7I/ny7cz0pwR0RnDpldY8RQqZeEmpcHI8vr9mupN7bqQuYUoJMWWgVBgfms20SY58KpEmPyBQKsFx4ej5fC5HfvQdTglO7NwJsWKZ0sbvNL3xa8PyC739zcqMdEb6gzymUDkkvYwTSgCMdDLNrjhPQycKuYdHKCGm5l9tZ01Yp/LmEaKeUPDQnK/jl6t7fielwriudHZGKImiAFdhRe+RtuzwkBf9usQzvWaPwKOU6ky5STa0mXpvQUd3VG0zW2dZ8f6orAqxwAqj0ftQYNGNU6ZA2ra5vke7wJwSl4FSknuFU9r2FQunSzVx4YohWyf7GBbIbUoBGQAnMR5O7jxu3C6FZ+u8U8WWrTMMzNZ5n2qPhiGljCcP5V0qzmyd3I7SQkqcmvp2DFMmFVe2TiJs8MZ7FJuIJVsn95bp9gRB0ARLtgTNEywkarwmeJoua5omiCQVWdNMk9csAVY0Td2yNJO3TNPjRdMjCzURtkYkfdmDXWiep2FLRJpnwfawhOdNyzI8jZdNjYcZgsl7vMUL5Ee7Yc/whzQDtiUTsDnvweoab2pvDiVsB/+o/nrZOm+2bya2i24d867dc8uKVbOLdk3ulc2mYvdqnl52ca9YtOs1t17k8YlULpdrEq5jXLd5rdhzLbd8oruWTUaUSJKruxoulm3txJV6tu3WRFy07VqtLEmWy0snrlKv14WyW4RFPIYD1HDTPIHdu01ctnr4RBHLUs0tlntv++jtLWbrPK9T0Waa9FXQwrZ4O7HkpQRhfq+z2Yu222a2zlgy75q8YViCKOqGafG6ZhgwJQgiL4q8Th6TIIqeYfEi1nhd4MlcmINhsSeUeViD5w2YIfCaYRmwki5inlewx+uiaOqmqIi8pgvk0oQtYGMD/ngMVx4PO+INzdI1DbbQybNG4BxMTVwU7W0zW2ciRfFqSlk0JFESLUmCorqGK1qGYhuui3VPkVxF07HiYlggKlKZECrasNiEqwobWLExLouaZJexDavaWMKwKs9Lrii6QlFRXKXG67YuSkVTUURdx9i2sYYV0XVhA9cVBZhTFmq2LcGFrCsLwr2YsnVCf7FyU3rTG5Phnxe65tKOXGzZOtwif0mysCIoWMSS52JJh+/ZsrGuYBdjV7MNTeehFtmKpJgG1CE68ga+ft1VsK2Ilq4rUD10Xi8jqHO8UrNsXZN02I9t2rxXwzysIAmYL8JubdGWoBZZrmYoWNfIpjxc84qu67wNh9TfzgsHfyl4LEVc2TpzUgzdEgxLsRQZG4YuerymwVnromHwMN8TyUN3DMXASFR4wEIeVQKWxMBQNrg2DV7HOlxmmKwp8AaUW9B12Cf24IoVdSzZ2BAsbOi8ZYtguwyRxyYYPzBlsC1YP0/RDYOaM35BOti2s3W2qM0dfevZOu9TsWXrxP0Yi+0q042jfykbfxO3XbGpi81n65zH8syBL6rq+e7pn4v1/p6t8yW0zWwdX6nuqj91n+qmVtySig1MTI+0ZRzZOiGDvHydc93kq98MjKSLYXa4cMvwn6FKXzw0lv+ZZvTGMK91s3UuQp+t02qwKbbRQqSfDEoEfyYP/2VR9jz6/DvPtMir94pzqZvop/ot8vhJQ5AFCPNN0YIgX+CRjj3RNEgHgKUg3tJ4TRTNF5uzDfaAIz83D+477QNQLN3Uwe8WbRGcfgGHueBsNSSMi/HZOvmh3GXJk5YgONMxUnQEkYUFMRgWJdvly5oHUT8E6uVXYfpBd5RvdXNIkBRU9hQRgkCvBuV0MYQmpFMAWxJyJdkwIT6DgOXF5p1GZ6iqXYR0hCGMJF0pZDPeQgZWDLFshiVfbDtbh+hm2Edd8hAlESkQsComgghWtLGrm7ZBYk9TI8+XRO6rLp9+K9FKlWBL28MAQtAEiIkRebahiLFnwEcTZlgaVDJRM72X3XPtxkGqS57nBEGxoXjIkiBmxAoiTwCF6JhXQijF+myd0F/2TA5HQ2760GL/bWZM5PnZL7d8OH9Iskg2Xy3SooRt/UZ3dBW86M3N27Fl67wR7LL9h0WdmSHK5M/76zj1ne5Kz26CcDeebJ3QJ6K8T2Vu4sjWiXvIydYld7aYrfN+tfk8lB2lKJTCs3XerWLJ1kmGDdJ9p2JLyS1m67xPrZ2tk3PUYA1Dvcr3p3Z3GFJKJxKlRKsUptZ3caszUdwH2ivdhKn1GkkApcTeG/qHjcrfZ3r8hL7xc/p8TWal0/EdOFgBRJaltCGlAw4bRektnNsXpbQqmK0j2zql9ObRBCu9QWIBu988pbiBRNDXSWlrVWZ5rVDJAvayMqW4ixeLtkFpI6c5/g9/6fEe954t848/t0VifGx/7mSNjZzLOpTm6+iGL6XB7d3H2+u72+u99PXTHXz4I/V/93e3t3uJwR97T/fXd3eJvbvU093H69Ttberjx73bj+Tj4Onu+v7j0/3gD/hwf526u77b7HktKnNQXYrPzAyergdPT4Pr2zTQGJBif/zj/vb2OgFQ9u727q/vKaXrwXXqmlBK3T2lyMfbzvV14j5xC1vf3l2nPt7ex3WGwYUPohSfBtcDqByD+3uoM/f0wx/3gOj6bnA7uL3fu/44IJRuUwkg+TS4ux7s3SdST4O9J6iBieu9W4A0uIUF9x+3215sl1JiMNijrwlicMgH3+SQGcQsDQglYqj2PsIH+pFus0cm6D+YGtAFW9WWKUXQ1+hVfH2UvkbtKEXRjlIU7ShF0Y5SFO0oRdGOUhTtKEXRjlIU7ShF0Y5SFO0oRdGOUhTtKEXR/wOIdjzk1mr0FAAAAABJRU5ErkJggg==",
        isActive: true
      },
      {
        voucherId: "POL002",
        voucherName: "Police Fitness Challenge",
        voucherDescription: "Participate in the annual police fitness challenge and get a chance to win prizes.",
        voucherStartDate: "2023-09-15",
        voucherEndDate: "2023-09-17",
        voucherBrand: "National Police Association",
        voucherType: "Single-Use",
        voucherImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MG1wkjHJZMzdv6N-LTTx7kI6RQ-yasnWiQ&s",
        isActive: true
      },
      {
        voucherId: "POL003",
        voucherName: "Cyber Crime Awareness Seminar",
        voucherDescription: "Learn about the latest cyber crime trends and prevention techniques from expert speakers.",
        voucherStartDate: "2023-08-01",
        voucherEndDate: "2023-08-31",
        voucherBrand: "Cyber Police Division",
        voucherType: "Expiry Date",
        voucherImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA4mOOyFnA1xPwJOwB5k7BVVKfWajcug9Xw&s",
        isActive: false
      },
      {
        voucherId: "POL004",
        voucherName: "K-9 Unit Demonstration",
        voucherDescription: "Watch a live demonstration of police K-9 units in action and meet the handlers.",
        voucherStartDate: "2023-10-10",
        voucherEndDate: "2023-10-10",
        voucherBrand: "State Police K-9 Unit",
        voucherType: "Single-Use",
        voucherImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSW3QKGv2zXgslJ5BHh-2CUSLgtzR5EVC6uBGTgkeQID-dc3lmmjz71cFNOKbQe_THac&usqp=CAU",
        isActive: true
      },
      {
        voucherId: "POL005",
        voucherName: "Police Equipment Expo",
        voucherDescription: "Explore the latest in police equipment and technology at this annual expo.",
        voucherStartDate: "2023-11-05",
        voucherEndDate: "2024-11-04",
        voucherBrand: "International Police Tech Association",
        voucherType: "Multi-Use",
        voucherImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_He6Xqgu3CQCbEYP_hhaJrt9-J3cN7BjiNMjSPdFZfSIu1mbjqbg7p1kE0vlI2qXhOfk&usqp=CAU",
        isActive: true
      }
  ],
  selectedVoucher: null,
  searchTerm: '',
  filterType: 'All',
};

const voucherSlice = createSlice({
  name: 'voucher',
  initialState,
  reducers: {
    addVoucher: (state, action: PayloadAction<VoucherType>) => {
      state.voucherList.push(action.payload);
    },
    updateVoucher: (state, action: PayloadAction<VoucherType>) => {
      const index = state.voucherList.findIndex(
        (voucher) => voucher.voucherId === action.payload.voucherId
      );
      if (index !== -1) {
        state.voucherList[index] = action.payload;
      }
    },
    removeVoucher: (state, action: PayloadAction<{ id: string }>) => {
      state.voucherList = state.voucherList.filter(
        (voucher) => voucher.voucherId !== action.payload.id
      );
    },
    setSelectedVoucher: (state, action: PayloadAction<VoucherType | null>) => {
      state.selectedVoucher = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
    },
  },
});

export const {
  addVoucher,
  updateVoucher,
  removeVoucher,
  setSelectedVoucher,
  setSearchTerm,
  setFilterType,
} = voucherSlice.actions;

export default voucherSlice.reducer;